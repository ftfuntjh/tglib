import {Type} from "./Type";

export namespace ObjectDefine {
    import int32 = Type.int32;

    export class node_tdlib_object implements Type.BaseMessage {
        [other: string]: Type.base;

        '@type': string;

        constructor(type: string) {
            this['@type'] = type;
        }

        getType(): string {
            return this['@type'];
        }

        toJson(): string {
            return JSON.stringify(this);
        }
    }

    export class node_tdlib_ok extends node_tdlib_object {
        constructor() {
            super("Ok");
        }
    }

    export class node_tdlib_tdlibParameters extends node_tdlib_object implements Type.TdlibParameters {
        use_test_dc: boolean;
        database_directory: string;
        files_directory: string;
        use_file_database: boolean;
        use_chat_info_database: boolean;
        use_message_database: boolean;
        use_secret_chats: boolean;
        api_id: int32;
        api_hash: string;
        system_language_code: string;
        device_model: string;
        system_version: string;
        application_version: string;
        enable_storage_optimizer: boolean;
        ignore_file_names: boolean;

        constructor(option: Type.TdlibParameters) {
            super("tdlibParameters");
            this.use_test_dc = option.use_test_dc;
            this.use_chat_info_database = option.use_chat_info_database;
            this.use_message_database = option.use_message_database;
            this.use_secret_chats = option.use_secret_chats;
            this.files_directory = option.files_directory;
            this.use_file_database = option.use_file_database;
            this.api_id = option.api_id;
            this.api_hash = option.api_hash;
            this.application_version = option.application_version;
            this.database_directory = option.database_directory;
            this.device_model = option.device_model;
            this.enable_storage_optimizer = option.enable_storage_optimizer;
            this.system_language_code = option.system_language_code;
            this.system_version = option.system_version;
            this.ignore_file_names = option.ignore_file_names;
        }

    }
}