declare module "ffi-napi" {
    type argument = string;
    type returnType = string;

    interface functionCall {
        [name: string]: functionSymbol,
    }

    interface functionSymbol {
        0: returnType,
        1: Array<argument>
    }

    interface async_func {
        async: (call: (err: Error, opther: any) => any) => void
    }

    interface async_func_with_parameters {
        async: (client: any, timeout: number | {}, call: (err: Error, opther: any) => any) => void
    }

    interface tdlib_interface {
        td_json_client_create: async_func,//td_json_client_create
        td_json_client_send: async_func_with_parameters,//td_json_client_send
        td_json_client_receive: async_func_with_parameters,//td_json_client_receive
        td_json_client_execute: async_func//td_json_client_execute
        td_json_client_destroy: (client: any) => void,//td_json_client_destroy
        td_set_log_file_path: (path: string) => void,//td_set_log_file_path
        td_set_log_verbosity_level: (level: number) => void,//td_set_log_verbosity_level
        td_set_log_fatal_error_callback: (callback: (error: Error) => void) => void,//td_set_log_fatal_error_callback
    }

    interface tdlib_async {
        async: (err: Error, client: any);
    }

    interface tdlib_function {
        [name: string]: tdlib_interface
    }
    
    export function Library(path: string, arguments: functionCall): tdlib_interface ;

    export function Callback(symbol: returnType, params: Array<argument>, callback: (error: Error) => void): (err: Error) => void;
}