import {tdlib_options} from "../src/tdlib-client/client";
import Config from "config";

export default class {
    static getEnableStorageOptimizer(): string {
        return Config.get("database.enable_storage_optimizer");
    }

    static getUseMessageDatabase(): boolean {
        return Config.get("database.use_message_database");
    }

    static getUseSecretChats(): boolean {
        return Config.get("database.use_secret_chats");
    }

    static getSystemLanguageCode(): boolean {
        return Config.get("database.system_language_code");
    }

    static getApplicationVersion(): string {
        return Config.get("database.application_version");
    }

    static getDeviceModel(): string {
        return Config.get("database.device_model");
    }

    static getConfig(): tdlib_options {
        return Config.get("database");
    }
}