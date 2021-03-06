// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import {Theme} from 'types/preferences';

const Preferences = {
    CATEGORY_CHANNEL_OPEN_TIME: 'channel_open_time',
    CATEGORY_CHANNEL_APPROXIMATE_VIEW_TIME: 'channel_approximate_view_time',
    CATEGORY_DIRECT_CHANNEL_SHOW: 'direct_channel_show',
    CATEGORY_GROUP_CHANNEL_SHOW: 'group_channel_show',
    CATEGORY_FLAGGED_POST: 'flagged_post',
    CATEGORY_FAVORITE_CHANNEL: 'favorite_channel',
    CATEGORY_AUTO_RESET_MANUAL_STATUS: 'auto_reset_manual_status',
    CATEGORY_NOTIFICATIONS: 'notifications',
    COLLAPSED_REPLY_THREADS: 'collapsed_reply_threads',
    COLLAPSED_REPLY_THREADS_OFF: 'off',
    COLLAPSED_REPLY_THREADS_ON: 'on',
    COLLAPSED_REPLY_THREADS_FALLBACK_DEFAULT: 'off',
    COMMENTS: 'comments',
    COMMENTS_ANY: 'any',
    COMMENTS_ROOT: 'root',
    COMMENTS_NEVER: 'never',
    EMAIL: 'email',
    EMAIL_INTERVAL: 'email_interval',
    INTERVAL_FIFTEEN_MINUTES: 15 * 60,
    INTERVAL_HOUR: 60 * 60,
    INTERVAL_IMMEDIATE: 30,

    // "immediate" is a 30 second interval
    INTERVAL_NEVER: 0,
    INTERVAL_NOT_SET: -1,
    CATEGORY_DISPLAY_SETTINGS: 'display_settings',
    NAME_NAME_FORMAT: 'name_format',
    DISPLAY_PREFER_NICKNAME: 'nickname_full_name',
    DISPLAY_PREFER_FULL_NAME: 'full_name',
    DISPLAY_PREFER_USERNAME: 'username',
    MENTION_KEYS: 'mention_keys',
    USE_MILITARY_TIME: 'use_military_time',

    CATEGORY_CUSTOM_STATUS: 'custom_status',
    NAME_CUSTOM_STATUS_TUTORIAL_STATE: 'custom_status_tutorial_state',
    NAME_RECENT_CUSTOM_STATUSES: 'recent_custom_statuses',
    CUSTOM_STATUS_MODAL_VIEWED: 'custom_status_modal_viewed',

    CATEGORY_SIDEBAR_SETTINGS: 'sidebar_settings',
    CHANNEL_SIDEBAR_ORGANIZATION: 'channel_sidebar_organization',
    CHANNEL_SIDEBAR_AUTOCLOSE_DMS: 'close_unused_direct_messages',
    AUTOCLOSE_DMS_ENABLED: 'after_seven_days',
    LIMIT_VISIBLE_DMS_GMS: 'limit_visible_dms_gms',
    SHOW_UNREAD_SECTION: 'show_unread_section',
    CATEGORY_ADVANCED_SETTINGS: 'advanced_settings',
    ADVANCED_FILTER_JOIN_LEAVE: 'join_leave',
    ADVANCED_CODE_BLOCK_ON_CTRL_ENTER: 'code_block_ctrl_enter',
    ADVANCED_SEND_ON_CTRL_ENTER: 'send_on_ctrl_enter',
    CATEGORY_WHATS_NEW_MODAL: 'whats_new_modal',
    HAS_SEEN_SIDEBAR_WHATS_NEW_MODAL: 'has_seen_sidebar_whats_new_modal',
    CATEGORY_THEME: 'theme',
    THEMES: {
        default: {
            type: 'grommunio',
            sidebarBg: '#1f1f1f',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#0072b0',
            sidebarTextActiveBorder: '#2DCAFF',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#2f2f2f',
            sidebarTeamBarBg: '#4f4f4f',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#76ce44',
            awayIndicator: '#f9c043',
            dndIndicator: '#e54141',
            mentionBg: '#ffffff',
            mentionBj: '#ffffff',
            mentionColor: '#383E5F',
            centerChannelBg: '#ffffff',
            centerChannelColor: '#1f1f1f',
            newMessageSeparator: '#f98d5e',
            linkColor: '#0072B0',
            buttonBg: '#0072b0',
            buttonColor: '#ffffff',
            errorTextColor: '#fa5e5d',
            mentionHighlightBg: '#f7d946',
            mentionHighlightLink: '#293377',
            codeTheme: 'github',
        },
        organization: {
            type: 'Organization',
            sidebarBg: '#2071a7',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#136197',
            sidebarTextActiveBorder: '#7ab0d6',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#2f81b7',
            sidebarTeamBarBg: '#256996',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#7dbe00',
            awayIndicator: '#dcbd4e',
            dndIndicator: '#ff6a6a',
            mentionBg: '#fbfbfb',
            mentionBj: '#fbfbfb',
            mentionColor: '#2071f7',
            centerChannelBg: '#f2f4f8',
            centerChannelColor: '#333333',
            newMessageSeparator: '#ff8800',
            linkColor: '#2f81b7',
            buttonBg: '#1dacfc',
            buttonColor: '#ffffff',
            errorTextColor: '#a94442',
            mentionHighlightBg: '#f3e197',
            mentionHighlightLink: '#2f81b7',
            codeTheme: 'github',
        },
        grommunioDark: {
            type: 'grommunio Dark',
            sidebarText: '#ffffff',
            sidebarBg: '#1f1f1f',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#5f5f5f',
            sidebarTextActiveBorder: '#2DCAFF',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#1a1a1a',
            sidebarTeamBarBg: '#0f0f0f',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#76ce44',
            awayIndicator: '#f9c043',
            dndIndicator: '#e54141',
            mentionBg: '#ffffff',
            mentionBj: '#ffffff',
            mentionColor: '#2f2f2f',
            centerChannelBg: '#1f1f1f',
            centerChannelColor: '#ffffff',
            newMessageSeparator: '#f98d5e',
            linkColor: '#2DCAFF',
            buttonBg: '#0072b0',
            buttonColor: '#ffffff',
            errorTextColor: '#fa5e5d',
            mentionHighlightBg: '#f7d946',
            mentionHighlightLink: '#293377',
            codeTheme: 'monokai',
        },
        windows10: {
            type: 'Windows Dark',
            sidebarBg: '#171717',
            sidebarText: '#ffffff',
            sidebarUnreadText: '#ffffff',
            sidebarTextHoverBg: '#302e30',
            sidebarTextActiveBorder: '#196caf',
            sidebarTextActiveColor: '#ffffff',
            sidebarHeaderBg: '#1f1f1f',
            sidebarTeamBarBg: '#181818',
            sidebarHeaderTextColor: '#ffffff',
            onlineIndicator: '#399fff',
            awayIndicator: '#c1b966',
            dndIndicator: '#e81023',
            mentionBg: '#0177e7',
            mentionBj: '#0177e7',
            mentionColor: '#ffffff',
            centerChannelBg: '#1f1f1f',
            centerChannelColor: '#dddddd',
            newMessageSeparator: '#cc992d',
            linkColor: '#0d93ff',
            buttonBg: '#0177e7',
            buttonColor: '#ffffff',
            errorTextColor: '#ff6461',
            mentionHighlightBg: '#784098',
            mentionHighlightLink: '#a4ffeb',
            codeTheme: 'monokai',
        },
    } as Record<string, Theme>,
};

export default Preferences;
