import {Library, tdlib_interface, Callback} from "./ffi-load";

export function tdlib_json(path: string) {
    return <tdlib_interface>Library(path, {
        'td_json_client_create': ['pointer', []],
        'td_json_client_send': ['void', ['pointer', 'string']],
        'td_json_client_receive': ['string', ['pointer', 'double']],
        'td_json_client_execute': ['string', ['pointer', 'string']],
        'td_json_client_destroy': ['void', ['pointer']],
        'td_set_log_file_path': ['int', ['string']],
        'td_set_log_verbosity_level': ['void', ['int']],
        'td_set_log_fatal_error_callback': ['void', ['pointer']],
    });
}

export function error_callback(callback: (error: Error) => void) {
    return Callback('void', ['string'], callback);
}

export {tdlib_interface}