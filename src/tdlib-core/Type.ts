export namespace Type {
    export type double = number;

    export type int32 = number;
    export type int53 = number;
    export type int64 = number;
    export type bytes = Uint8Array;
    export type Bool = boolean;
    export type vector<T> = Array<T>;

    export type base =
        string
        | undefined
        | int32
        | int53
        | int64
        | bytes
        | Bool
        | Function
        | BaseMessage
        | vector<string | undefined | int32 | int53 | int64 | bytes | Bool | BaseMessage | Function | vector<BaseMessage>>;

    export interface BaseMessage {
        [param: string]: base;

        '@type': string;
    }

    export interface error extends BaseMessage {
        code: int32;
        message: string;
    }

    export interface Ok extends BaseMessage {
    }

    export interface AuthenticationCodeType extends BaseMessage {
        length?: int32;
        pattern?: string;
    }

    export interface AuthenticationCodeInfo extends BaseMessage {
        phone_number: string;
        type: AuthenticationCodeType;
        next_type: AuthenticationCodeType;
        timeout: int32;
    }

    export interface AuthorizationState extends BaseMessage {
        is_encrypted?: boolean;
        is_registered?: boolean;
        code_info?: AuthenticationCodeInfo;
        password_hint?: string;
        has_recovery_email_address?: boolean;
        recovery_email_address_pattern?: string;
    }

    export interface PasswordState extends BaseMessage {
        has_password: boolean;
        password_hint: string;
        has_recovery_email_address: boolean;
        unconfirmed_recovery_email_address_pattern: string
    }

    export interface PasswordRecoveryInfo extends BaseMessage {
        recovery_email_address_pattern: string;
    }

    export interface RecoveryEmailAddress extends BaseMessage {
        recovery_email_address: string;
    }

    export interface TemporaryPasswordState extends BaseMessage {
        has_password: boolean;
        valid_for: int32
    }

    export interface LocalFile extends BaseMessage {
        path: string;
        can_be_downloaded: Bool;
        can_be_deleted: Bool;
        is_downloading_active: Bool;
        is_downloading_completed: Bool;
        downloaded_prefix_size: int32;
        downloaded_size: int32;
    }

    export interface RemoteFile extends BaseMessage {
        id: string;
        is_uploading_active: Bool;
        is_uploading_completed: Bool;
        uploaded_size: int32;
    }

    export interface File extends BaseMessage {
        id: int32;
        size: int32;
        expected_size: int32;
        local: LocalFile;
        remote: RemoteFile;
    }

    export interface InputFile extends BaseMessage {
        id: int32 | string;
        path: string;
        original_path: string;
        conversion: string;
        expected_size: int32;
    }

    export interface PhotoSize extends BaseMessage {
        type: string;
        photo: File;
        width: int32;
        height: int32;
    }

    export interface MaskPoint extends BaseMessage {
        point?: MaskPoint;
        x_shift?: double;
        y_shift?: double;
        scale?: double;
    }

    export interface TextEntityType extends BaseMessage {
        language?: string;
        url?: string;
        user_id?: int32;
    }

    export interface TextEntities extends BaseMessage {
        offset: int32;
        length: int32;
        type: TextEntityType;
        entities: vector<TextEntities>
    }

    export interface FormattedText extends BaseMessage {
        text: string;
        entities: vector<TextEntities>;
    }

    export interface Animation extends BaseMessage {
        duration: int32;
        width: int32;
        height: int32;
        file_name: string;
        mime_type: string;
        thumbnail: PhotoSize;
        animation: File;
    }

    export interface Audio extends BaseMessage {
        duration: int32;
        title: string;
        performer: string;
        file_name: string;
        mime_type: string;
        album_cover_thumbnail: PhotoSize;
        audio: File;
    }

    export interface Document extends BaseMessage {
        file_name: string;
        mime_type: string;
        thumbnail: PhotoSize;
        document: File;
    }

    export interface Photo extends BaseMessage {
        id: int64
        has_stickers: Bool;
        sizes: vector<PhotoSize>;
    }

    export interface Sticker extends BaseMessage {
        set_id: int64;
        width: int32;
        height: int32;
        emoji: string;
        is_mask: Bool;
        mask_position: MaskPoint;
        thumbnail: PhotoSize;
        sticker: File;
    }

    export interface Video extends BaseMessage {
        duration: int32;
        width: int32;
        height: int32;
        file_name: string;
        mime_type: string;
        has_stickers: Bool;
        supports_streaming: Bool;
        thumbnail: PhotoSize;
        video: File;
    }

    export interface VideNote extends BaseMessage {
        duration: int32;
        length: int32;
        thumbnail: PhotoSize;
        video: File;
    }

    export interface VoiceNote extends BaseMessage {
        duration: int32;
        waveform: bytes;
        mime_type: string;
        voice: File;
    }

    export interface Contact extends BaseMessage {
        phone_number: string;
        first_name: string;
        last_name: string;
        user_id: int32;
    }

    export interface Location extends BaseMessage {
        latitude: double;
        longitude: double;
    }

    export interface Venue extends BaseMessage {
        location: Location;
        title: string;
        address: string;
        provider: string;
        id: string;
    }

    export interface Game extends BaseMessage {
        id: int64;
        short_name: string;
        title: string;
        text: FormattedText;
        description: string;
        photo: Photo;
        animation: Animation;
    }

    export interface ProfilePhoto extends BaseMessage {
        id: int64;
        small: File;
        big: File;
    }

    export interface ChatPhoto extends BaseMessage {
        small: File;
        big: File;
    }

    export interface LinkState extends BaseMessage {

    }

    export interface UserType extends BaseMessage {
        can_join_groups: Bool;
        can_read_all_group_messages: Bool;
        is_inline: Bool;
        inline_query_placeholder: string;
        need_location: Bool;
    }

    export interface BotCommand extends BaseMessage {
        command: string;
        description: string;
    }

    export interface BotInfo extends BaseMessage {
        description: string;
        commands: vector<BotCommand>
    }

    export interface UserStatus extends BaseMessage {
        expires: int32;
        was_online: int32;
    }

    export interface User extends BaseMessage {
        id: int32;
        first_name: string;
        last_name: string;
        username: string;
        phone_number: string;
        status: UserStatus
        profile_photo: ProfilePhoto
        outgoing_link: LinkState
        incoming_link: LinkState
        is_verified: Bool
        restriction_reason: string
        have_access: Bool
        type: UserType
        language_code: string
    }

    export interface UserFullInfo extends BaseMessage {
        is_blocked: Bool;
        can_be_called: Bool;
        has_private_calls: Bool;
        bio: string;
        share_text: string;
        group_in_common_count: int32;
        bot_info: BotInfo;
    }

    export interface UserProfilePhotos extends BaseMessage {
        total_count: int32;
        photos: vector<Photo>;
    }

    export interface Users extends BaseMessage {
        total_count: int32;
        user_ids: vector<int32>;
    }

    export interface ChatMemberStatus extends BaseMessage {
        is_member: Bool;
    }

    export interface ChatMemberStatus extends BaseMessage {
        can_be_edited: Bool;
        can_change_info: Bool;
        can_post_messages: Bool;
        can_edit_messages: Bool;
        can_delete_messages: Bool;
        can_invite_users: Bool;
        can_restrict_members: Bool;
        can_pin_messages: Bool;
        can_promote_members: Bool;
        is_member: Bool;
        restricted_until_date: int32;
        can_send_messages: Bool;
        can_send_media_messages: Bool;
        can_send_other_messages: Bool;
        can_add_web_page_previews: Bool;
        banned_until_date: int32;
    }

    export interface ChatMember extends BaseMessage {
        user_id: int32;
        inviter_user_id: int32;
        joined_chat_date: int32;
        status: ChatMemberStatus;
        bot_info: BotInfo;
    }

    export interface ChatMembers extends BaseMessage {
        total_count: int32;
        members: vector<ChatMember>;
    }

    export interface SupergroupMembersFilter {
        query: string;
    }


    export interface TdlibParameters extends BaseMessage {
        use_test_dc: Bool
        database_directory: string
        files_directory: string
        use_file_database: Bool
        use_chat_info_database: Bool
        use_message_database: Bool
        use_secret_chats: Bool
        api_id: int32
        api_hash: string
        system_language_code: string
        device_model: string
        system_version: string
        application_version: string
        enable_storage_optimizer: Bool
        ignore_file_names: Bool
    }

    export interface BasicGroup extends BaseMessage {
        id: int32;
        member_count: int32;
        status: ChatMemberStatus;
        everyone_is_administrator: Bool;
        is_active: Bool;
        upgraded_to_supergroup_id: int32;
    }

    export interface BasicGroupFullInfo extends BaseMessage {
        creator_user_id: int32;
        members: vector<ChatMember>;
        invite_link: string;
    }

    export interface Supergroup extends BaseMessage {
        id: int32;
        username: string;
        date: int32;
        status: ChatMemberStatus;
        member_count: int32;
        anyone_can_invite: Bool;
        sign_messages: Bool;
        is_channel: Bool;
        is_verified: Bool;
        restriction_reason: string;
    }

    export interface SupergroupFullInfo extends BaseMessage {
        description: string;
        member_count: int32;
        administrator_count: int32;
        restricted_count: int32;
        banned_count: int32;
        can_get_members: Bool;
        can_set_username: Bool;
        can_set_sticker_set: Bool;
        is_all_history_available: Bool;
        sticker_set_id: int64;
        invite_link: string;
        pinned_message_id: int53;
        upgraded_from_basic_group_id: int32;
        upgraded_from_max_message_id: int53;
    }

    export interface SecretChatState extends BaseMessage {
        id: int32;
        user_id: int32;
        state: SecretChatState;
        is_outbound: Bool;
        ttl: int32;
        key_hash: bytes;
        layer: int32;
    }

    export interface MessageForwardInfo extends BaseMessage {
        sender_user_id: int32;
        date: int32;
        forwarded_from_chat_id: int53;
        forwarded_from_message_id: int53;
    }

    export interface MessageForwardInfo extends BaseMessage {
        chat_id: int53;
        author_signature: string;
        date: int32;
        message_id: int53;
        forwarded_from_chat_id: int53;
        forwarded_from_message_id: int53;
    }

    export interface MessageSendingState extends BaseMessage {

    }

    export interface Message extends BaseMessage {
        id: int53;
        sender_user_id: int32;
        chat_id: int53;
        sending_state: MessageSendingState;
        is_outgoing: Bool;
        can_be_edited: Bool;
        can_be_forwarded: Bool;
        can_be_deleted_only_for_self: Bool;
        can_be_deleted_for_all_users: Bool;
        is_channel_post: Bool;
        contains_unread_mention: Bool;
        date: int32;
        edit_date: int32;
        forward_info: MessageForwardInfo;
        reply_to_message_id: int53;
        ttl: int32;
        ttl_expires_in: double;
        via_bot_user_id: int32;
        author_signature: string;
        views: int32;
        media_album_id: int64;
        content: MessageContent;
        reply_markup: ReplyMarkup;
        total_count: int32;
        messages: vector<Message>;
    }

    export interface FoundMessages extends BaseMessage {
        messages: vector<Message>;
        next_from_search_id: int64;
    }

    export interface NotificationSettingsScope extends BaseMessage {
        chat_id: int53;
    }

    export interface NotificationSettings extends BaseMessage {
        mute_for: int32;
        sound: string;
        show_preview: Bool;
    }


    export interface InputMessageContent extends BaseMessage {
        text: FormattedText;
        disable_web_page_preview: Bool;
        clear_draft: Bool;
    }

    export interface DraftMessage extends BaseMessage {
        reply_to_message_id: int53;
        input_message_text: InputMessageContent;
    }


    export interface ChatType extends BaseMessage {
        user_id?: int32;
        basic_group_id?: int32;
        supergroup_id?: int32;
        is_channel?: Bool;
        secret_chat_id?: int32;
    }

    export interface Chats extends BaseMessage {
        chat_ids: vector<int53>;
    }

    export interface ChatInviteLink extends BaseMessage {
        invite_link: string;
        chat_id: int53;
        type: ChatType;
        title: string;
        photo: ChatPhoto;
        member_count: int32;
        member_user_ids: vector<int32>;
        is_public: Bool;
    }

    export interface KeyboardButtonType extends BaseMessage {
        text: string;
        type: KeyboardButtonType;
    }

    export interface InlineKeyboardButtonType extends BaseMessage {
        url: string;
        data: bytes;
        query: string;
        in_current_chat: Bool;
        text: string;
        type: InlineKeyboardButtonType;
    }


    export interface MessageContent extends BaseMessage {

    }

    export interface InlineKeyboardButton extends BaseMessage {
        text: string;
        type: InlineKeyboardButtonType;
    }

    export interface ReplyMarkup extends BaseMessage {
        is_personal: Bool;
        rows: vector<vector<KeyboardButton>> | vector<vector<InlineKeyboardButton>>;
        resize_keyboard: Bool;
        one_time: Bool;
    }

    export interface RichText extends BaseMessage {
        url: string;
        text: string | RichText;
        texts: vector<RichText>;
        email_address: string;
    }

    export interface PageBlock extends BaseMessage {
        title: RichText;
        subtitle: RichText;
        author: RichText;
        publish_date: int32;
        header: RichText;
        subheader: RichText;
        text: RichText;
        language: string;
        footer: RichText;
        name: string;
        items: vector<RichText>;
        is_ordered: Bool;
        caption: RichText;
        animation: Animation;
        need_autoplay: Bool;
        audio: Audio;
        photo: Photo | ChatPhoto;
        video: Video;
        is_looped: Bool;
        cover: PageBlock;
        url: string;
        html: string;
        poster_photo: Photo;
        width: int32;
        height: int32;
        is_full_width: Bool;
        allow_scrolling: Bool;
        author_photo: Photo;
        date: int32;
        page_blocks: vector<PageBlock>;
        username: string;
    }

    export interface WebPageInstantView extends BaseMessage {
        page_blocks: vector<PageBlock>;
        is_full: Bool;
    }

    export interface WebPage extends BaseMessage {
        url: string
        display_url: string
        type: string
        site_name: string
        title: string
        description: string
        photo: Photo
        embed_url: string
        embed_type: string
        embed_width: int32
        embed_height: int32
        duration: int32
        author: string
        animation: Animation
        audio: Audio
        document: Document
        sticker: Sticker
        video: Video
        video_note: VideoNote
        voice_note: VoiceNote
        has_instant_view: Bool
    }

    export interface LabeledPricePart extends BaseMessage {
        label: string;
        amount: int53;
    }

    export interface Invoice extends BaseMessage {
        currency: string;
        price_parts: vector<LabeledPricePart>;
        is_test: Bool;
        need_name: Bool;
        need_phone_number: Bool;
        need_email_address: Bool;
        need_shipping_address: Bool;
        send_phone_number_to_provider: Bool;
        send_email_address_to_provider: Bool;
        is_flexible: Bool;
    }

    export interface OrderInfo extends BaseMessage {
        name: string;
        phone_number: string;
        email_address: string;
        shipping_address: ShippingAddress;
    }

    export interface ShippingOption extends BaseMessage {
        id: string;
        title: string;
        price_parts: vector<LabeledPricePart>
    }

    export interface SavedCredentials extends BaseMessage {
        id: string;
        title: string;
    }

    export interface InputCredentials extends BaseMessage {
        saved_credentials_id: string;
        data: string;
        allow_save: Bool;
    }

    export interface PaymentsProviderStripe extends BaseMessage {
        publishable_key: string;
        need_country: Bool;
        need_postal_code: Bool;
        need_cardholder_name: Bool;
    }

    export interface PaymentForm extends BaseMessage {
        invoice: Invoice;
        url: string;
        payments_provider: PaymentsProviderStripe;
        saved_order_info: OrderInfo;
        saved_credentials: SavedCredentials;
        can_save_credentials: Bool;
        need_password: Bool;
    }

    export interface ValidatedOrderInfo extends BaseMessage {
        order_info_id: string;
        shipping_options: vector<ShippingOption>;
    }

    export interface PaymentResult extends BaseMessage {
        success: Bool;
        verification_url: string;
    }

    export interface PaymentReceipt extends BaseMessage {
        date: int32;
        payments_provider_user_id: int32;
        invoice: Invoice;
        order_info: OrderInfo;
        shipping_option: ShippingOption;
        credentials_title: string;
    }

    export interface MessageContent extends BaseMessage {
        text: FormattedText;
        web_page: WebPage;
        animation: Animation;
        caption: FormattedText;
        is_secret: Bool;
        audio: Audio;
        document: Document;
        photo: Photo;
        sticker: Sticker;
        Video_note: VideoNote;
        is_viewed: Bool;
        is_listened: Bool;
        location: Location;
        live_period: int32;
        expires_in: int32;
        venue: Venue;
        contact: Contact;
        game: Game;
        title: string;
        description: string;
        currency: string;
        total_amount: int53;
        start_parameter: string;
        is_test: Bool;
        need_shipping_address: Bool;
        receipt_message_id: int53;
        discard_reason: CallDiscardReason;
        duration: int32;
        member_user_ids: vector<int32>
        user_id: int32;
        supergroup_id: int32;
        basic_group_id: int32;
        message_id: int53;
        ttl: int32;
        game_message_id: int53;
        game_id: int64;
        score: int32;
        invoice_message_id: int53;
        invoice_payload: bytes;
        shipping_option_id: string;
        order_info: OrderInfo;
        telegram_payment_charge_id: string;
        provider_payment_charge_id: string;
        domain_name: string;
    }

    export interface InputThumbnail extends BaseMessage {
        thumbnail: InputFile;
        width: int32;
        height: int32;
    }

    export interface InputMessageContent {
        thumbnail: InputFile | InputThumbnail;
        width: int32;
        height: int32;
        animation: InputFile;
        duration: int32;
        caption: FormattedText;
        audio: InputFile;
        album_cover_thumbnail: InputThumbnail;
        title: string;
        performer: string;
        document: InputFile;
        photo: InputFile;
        added_sticker_file_ids: vector<int32>;
        sticker: InputFile;
        video: InputFile;
        supports_streaming: Bool;
        ttl: int32;
        video_note: InputFile;
        length: int32;
        voice_note: InputFile;
        waveform: bytes;
        location: Location;
        live_period: int32;
        venue: Venue;
        contact: Contact;
        bot_user_id: int32;
        game_short_name: string;
        invoice: Invoice;
        description: string;
        photo_url: string;
        photo_size: int32;
        photo_width: int32;
        photo_height: int32;
        payload: bytes;
        provider_token: string;
        provider_data: string;
        start_parameter: string;
        from_chat_id: int53;
        message_id: int53;
        in_game_share: Bool;
    }

    export interface SearchMessagesFilter extends BaseMessage {

    }

    export interface ChatAction extends BaseMessage {
        progress: int32;
    }


    export interface Interface extends BaseMessage {

    }

    export interface UserStatus extends BaseMessage {
        expires: int32;
        was_online: int32;
    }

    export interface Stickers extends BaseMessage {
        stickers: vector<Sticker>;
    }

    export interface StickerEmojis extends BaseMessage {
        emojis: vector<string>;
    }

    export interface StickerSet extends BaseMessage {
        id: int64;
        title: string;
        name: string;
        is_installed: Bool;
        is_archived: Bool;
        is_official: Bool;
        is_masks: Bool;
        is_viewed: Bool;
        stickers: vector<Sticker>;
        emojis: vector<StickerEmojis>;
    }

    export interface StickerSetInfo extends BaseMessage {
        id: int64;
        title: string;
        name: string;
        is_installed: Bool;
        is_archived: Bool;
        is_official: Bool;
        is_masks: Bool;
        is_viewed: Bool;
        size: int32;
        covers: vector<Sticker>;
    }

    export interface StickerSets extends BaseMessage {
        total_count: int32;
        sets: vector<StickerSetInfo>;
    }

    export interface CallDiscardReason extends BaseMessage {

    }

    export interface CallProtocol extends BaseMessage {
        udp_p2p: Bool;
        udp_reflector: Bool;
        min_layer: int32;
        max_layer: int32;
    }

    export interface CallConnection extends BaseMessage {
        id: int64;
        ip: string;
        ipv6: string;
        port: int32;
        peer_tag: bytes;
    }

    export interface CallId extends BaseMessage {
        id: int32;
    }

    export interface CallState extends BaseMessage {
        is_created: Bool;
        is_received: Bool;
        protocol: CallProtocol;
        connections: vector<CallConnection>;
        config: string;
        encryption_key: bytes;
        emojis: vector<string>;
        reason: CallDiscardReason;
        need_rating: Bool;
        need_debug_information: Bool;
        error: error;
    }

    export interface Call extends BaseMessage {
        id: int32;
        user_id: int32;
        is_outgoing: Bool;
        state: CallState;
    }

    export interface Animations extends BaseMessage {
        animations: vector<Animation>;
    }

    export interface ImportedContacts extends BaseMessage {
        user_ids: vector<int32>;
        importer_count: vector<int32>;
    }

    export interface InputInlineQueryResult extends BaseMessage {
        id: string
        title: string
        thumbnail_url: string
        mpeg4_url: string
        mpeg4_duration: int32
        mpeg4_width: int32
        mpeg4_height: int32
        reply_markup: ReplyMarkup
        input_message_content: InputMessageContent
        performer: string
        audio_url: string
        audio_duration: int32
        url: string
        hide_url: Bool
        description: string
        thumbnail_width: int32
        thumbnail_height: int32
        gif_url: string
        gif_duration: int32
        gif_width: int32
        gif_height: int32


        contact: Contact

        document_url: string
        mime_type: string

        game_short_name: string

        location: Location
        live_period: int32

        photo_url: string
        photo_width: int32
        photo_height: int32


        sticker_url: string
        sticker_width: int32
        sticker_height: int32


        venue: Venue

        video_url: string
        video_width: int32
        video_height: int32
        video_duration: int32
        voice_note_url: string
        voice_note_duration: int32
    }

    export interface InlineQueryResult extends BaseMessage {
        id: string
        url: string
        hide_url: Bool
        title: string
        description: string
        thumbnail: PhotoSize
        contact: Contact
        location: Location
        venue: Venue
        game: Game
        animation: Animation
        audio: Audio;
        document: Document
        photo: Photo
        sticker: Sticker;
        video: Video
        voice_note: VoiceNote
    }

    export interface CallbackQueryPayload extends BaseMessage {
        data: bytes;
        game_short_name: string;
        text: string;
        show_alert: Bool;
        url: string;
    }

    export interface CustomRequestResult extends BaseMessage {
        result: string;
    }

    export interface GameHighScore extends BaseMessage {
        scores: vector<GameHighScore>;
    }

    export interface ChatEventAction extends BaseMessage {
        old_message: Message;
        new_message: Message;
        user_id: int32;
        status: ChatMemberStatus;
        old_status: ChatMemberStatus;
        new_status: ChatMemberStatus;
        old_title: string;
        new_title: string;
        old_description: string;
        new_description: string;
        old_username: string;
        new_username: string;
        old_photo: ChatPhoto;
        new_photo: ChatPhoto;
        anyone_can_invite: Bool;
        sign_messages: Bool;
        old_sticker_set_id: int64;
        new_sticker_set_id: int64;
        is_all_history_available: Bool;
    }

    export interface ChatEvent extends BaseMessage {
        id: int64;
        date: int32;
        action: ChatEventAction;
    }

    export interface ChatEvents extends BaseMessage {
        events: vector<ChatEvent>;
    }

    export interface ChatEventLogFilters extends BaseMessage {
        message_edits: Bool;
        message_deletions: Bool;
        message_pins: Bool;
        member_joins: Bool;
        member_leaves: Bool;
        member_invites: Bool;
        member_promotions: Bool;
        member_restrictions: Bool;
        info_changes: Bool;
        setting_changes: Bool;
    }

    export interface DeviceToken extends BaseMessage {
        token: string;
        device_token: string;
        is_app_sandbox: Bool;
        access_token: string;
        channel_uri: string;
        endpoint: string;
        p256dh_base64url: string;
        auth_base64url: string;
        reg_id: string;
    }

    export interface Wallpaper extends BaseMessage {
        id: int32;
        sizes: vector<PhotoSize>;
        color: int32;
        wallpapers: vector<Wallpaper>;
    }

    export interface Hashtags extends BaseMessage {
        hashtags: vector<string>
    }

    export interface CheckChatUsernameResult extends BaseMessage {

    }

    export interface OptionValue extends BaseMessage {
        value: Bool | int32 | string;
    }

    export interface UserPrivacySettingRule extends BaseMessage {
        user_ids: vector<int32>;
    }

    export interface UserPrivacySettingRules extends BaseMessage {
        rules: vector<UserPrivacySettingRule>;
    }

    export interface UserPrivacySetting extends BaseMessage {

    }

    export interface AccountTtl extends BaseMessage {
        days: int32;
    }

    export interface Session extends BaseMessage {
        id: int64
        is_current: Bool
        api_id: int32
        application_name: string
        application_version: string
        is_official_application: Bool
        device_model: string
        platform: string
        system_version: string
        log_in_date: int32
        last_active_date: int32
        ip: string
        country: string
        region: string
    }

    export interface Sessions extends BaseMessage {
        sessions: vector<Session>
    }

    export interface ConnectedWebsite extends BaseMessage {
        id: int64
        domain_name: string
        bot_user_id: int32
        browser: string
        platform: string
        log_in_date: int32
        last_active_date: int32
        ip: string
        location: string
    }

    export interface ConnectedWebsites extends BaseMessage {
        websites: vector<ConnectedWebsite>;
    }

    export interface ChatReportSpamState extends BaseMessage {
        can_report_spam: Bool;
    }

    export interface ChatReportReason extends BaseMessage {
        text: string;
    }

    export interface PublicMessageLink extends BaseMessage {
        link: string;
        html: string;
    }

    export interface FileType extends BaseMessage {

    }

    export interface StorageStatisticsByFileType extends BaseMessage {
        file_type: FileType
        size: int53
        count: int32
    }


    export interface StorageStatisticsByChat extends BaseMessage {
        chat_id: int53;
        size: int53;
        count: int32;
        by_file_type: vector<StorageStatisticsByFileType>;
    }

    export interface StorageStatistics extends BaseMessage {
        size: int53;
        count: int32;
        by_chat: vector<StorageStatisticsByChat>;
    }

    export interface StorageStatisticsFast extends BaseMessage {
        files_size: int53;
        file_count: int32;
        database_size: int53;
    }

    export interface NetworkType extends BaseMessage {

    }

    export interface NetworkStatisticsEntry extends BaseMessage {
        file_type: FileType
        network_type: NetworkType
        sent_bytes: int53
        received_bytes: int53
    }

    export interface NetworkStatisticsEntry extends BaseMessage {
        network_type: NetworkType;
        sent_bytes: int53;
        received_bytes: int53;
        duration: double;
    }

    export interface NetworkStatistics extends BaseMessage {
        since_date: int32;
        entries: vector<NetworkStatisticsEntry>;
    }

    export interface ConnectionState extends BaseMessage {

    }

    export interface TopChatCategory extends BaseMessage {

    }

    export interface TMeUrlType extends BaseMessage {
        user_id: int32;
        supergroup_id: int53;
        info: ChatInviteLinkInfo
        sticker_set_id: int64
    }

    export interface TMeUrl extends BaseMessage {
        url: string;
        type: TMeUrlType;
    }

    export interface Count extends BaseMessage {
        count: int32;
    }

    export interface Text extends BaseMessage {
        text: string;
    }

    export interface TextParseMode extends BaseMessage {

    }

    export interface Proxy extends BaseMessage {
        server: string;
        port: int32;
        username: string;
        password: string;
    }

    export interface InputSticker extends BaseMessage {
        png_sticker: InputFile;
        emojis: string;
        mask_position: MaskPosition;
    }

    export interface SecretChat extends BaseMessage {
        id: int32
        user_id: int32
        state: SecretChatState
        is_outbound: Bool
        ttl: int32
        key_hash: bytes
        layer: int32
    }


    export interface Update extends BaseMessage {
        authorization_state: AuthorizationState;
        message: Message;
        disable_notification: Bool;
        contains_mention: Bool;
        old_message_id: int53;
        error_code: int32
        error_message: string
        new_content: MessageContent
        edit_date: int32
        reply_markup: ReplyMarkup
        views: int32
        chat: Chat
        title: string
        photo: ChatPhoto
        last_message: Message
        is_pinned: Bool
        last_read_inbox_message_id: int53
        last_read_outbox_message_id: int53
        unread_mention_count: int32
        scope: NotificationSettingsScope
        notification_settings: NotificationSettings
        reply_markup_message_id: int53
        draft_message: DraftMessage
        order: int64
        message_ids: vector<int53>
        is_permanent: Bool
        from_cache: Bool
        action: ChatAction
        status: UserStatus
        user: User
        basic_group: BasicGroup
        supergroup: Supergroup
        secret_chat: SecretChat
        user_id: int32
        user_full_info: UserFullInfo
        basic_group_id: int32
        basic_group_full_info: BasicGroupFullInfo
        supergroup_id: int32
        supergroup_full_info: SupergroupFullInfo
        type: string
        content: MessageContent
        file: File
        original_path: string
        destination_path: string
        conversion: string
        call: Call
        setting: UserPrivacySetting
        rules: UserPrivacySettingRules
        unread_count: int32
        unread_unmuted_count: int32
        name: string
        value: OptionValue
        is_masks: Bool
        sticker_set_ids: vector<int64>
        sticker_sets: StickerSets
        is_attached: Bool
        animation_ids: vector<int32>
        state: ConnectionState
        offset: string
        user_location: Location
        query: string
        result_id: string
        chat_id: int53
        message_id: int53
        inline_message_id: string
        chat_instance: int64
        payload: CallbackQueryPayload
        shipping_address: ShippingAddress
        sender_user_id: int32
        currency: string
        total_amount: int53
        invoice_payload: bytes
        shipping_option_id: string
        order_info: OrderInfo
        event: string
        id: int64
        data: string
        timeout: int32
    }

    export interface TestInt extends BaseMessage {
        value: int32;
    }

    export interface TestString extends BaseMessage {
        value: string;
    }


    export interface TestBytes extends BaseMessage {
        value: bytes;
    }

    export interface TestVectorInt extends BaseMessage {
        value: vector<int32>;
    }

    export interface TestVectorIntObject extends BaseMessage {
        value: vector<TestInt>
    }

    export interface TestVectorString extends BaseMessage {
        value: vector<string>
    }

    export interface TestVectorStringObject extends BaseMessage {
        value: vector<TestString>
    }

    export interface Chats extends BaseMessage {
        chat_ids: vector<int53>;
    }

    export interface Chat extends BaseMessage {
        id: int53
        type: ChatType
        title: string
        photo: ChatPhoto
        last_message: Message
        order: int64
        is_pinned: Bool
        can_be_reported: Bool
        unread_count: int32
        last_read_inbox_message_id: int53
        last_read_outbox_message_id: int53
        unread_mention_count: int32
        notification_settings: NotificationSettings
        reply_markup_message_id: int53
        draft_message: DraftMessage
        client_data: string
    }

    export interface Interface {

    }


    export interface TmeUrls extends BaseMessage {
        urls: vector<TMeUrl>;
    }


    export interface MaskPosition extends BaseMessage {

    }

    export interface ChatInviteLinkInfo extends BaseMessage {

    }

    export interface CallDiscardReason extends BaseMessage {

    }

    export interface ShippingAddress extends BaseMessage {

    }

    export interface VideoNote extends BaseMessage {

    }

    export interface KeyboardButton extends BaseMessage {

    }
}
