import {tdlib_json, error_callback, tdlib_interface} from "../tdlib-core/tdlib-load";
import {Type} from "../tdlib-core/Type";
import Path from "path";


namespace Option {
    export interface tdlibParameters {
        enable_storage_optimizer: boolean,
        use_message_database: boolean,
        use_secret_chats: boolean,
        system_language_code: string,
        application_version: string,
        device_model: string,
        system_version: string,
        verbosityLevel: number
    }

    export interface tdlib_app {
        appId: string,
        apiHash: string,
        logPath: string
    }


    export interface tdlib_options extends tdlibParameters, tdlib_app {
        tdlib_path: string
    }
}

export class BaseClient {
    private readonly options: Option.tdlib_options;
    private client: any;
    private readonly tdlib: tdlib_interface;

    constructor(options: Option.tdlib_options) {
        this.options = options;
        this.tdlib = tdlib_json(Path.resolve(__dirname, options.tdlib_path));
        this.tdlib.td_set_log_file_path(Path.resolve(__dirname, options.logPath));
        this.tdlib.td_set_log_verbosity_level(options.verbosityLevel);
        this.tdlib.td_set_log_fatal_error_callback(error_callback((error: Error) => {
            console.error(error);
        }));
    }

    async init() {
        this.client = await this._create();
    }

    _create(): Promise<any> {
        return new Promise<any>(((resolve, reject) => {
            this.tdlib.td_json_client_create.async((err: Error, client: any) => {
                if (err) {
                    return reject(err)
                }
                resolve(client)
            });
        }));
    }

    _send(queryJson: Type.BaseMessage): Promise<Type.BaseMessage | Error> {
        return new Promise<Error | Type.BaseMessage>((resolve, reject) => {
            if (!this.client) {
                return reject(new Error("client not created"));
            }

            this.tdlib.td_json_client_send.async(this.client, queryJson, (err: Error, response: any) => {
                if (err) {
                    return reject(err);
                }

                if (!response) {
                    return null;
                }
            });
        })
    }

    _receive(timeout = 10): Promise<Type.BaseMessage | null> {
        return new Promise((resolve, reject) => {
            if (!this.client) {
                return reject(new Error("client not created"));
            }
            this.tdlib.td_json_client_receive.async(this.client, timeout, (err: Error, response: string) => {
                if (err) {
                    return reject(err);
                }
                if (!response) {
                    return resolve(null);
                }
                resolve(JSON.parse(response));
            });
        })
    }
}