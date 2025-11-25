const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// Robust convertToBool
function convertToBool(value, defaultValue = false) {
    if (typeof value === 'undefined') return defaultValue;
    if (typeof value === 'string') return value.toLowerCase() === 'true';
    return Boolean(value);
}

module.exports = {
    // === STATUS FEATURES ===
    AUTO_STATUS_SEEN: convertToBool(process.env.AUTO_STATUS_SEEN, true),
    AUTO_STATUS_REPLY: convertToBool(process.env.AUTO_STATUS_REPLY, false),
    AUTO_STATUS_REACT: convertToBool(process.env.AUTO_STATUS_REACT, true),
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*YOUR STATUS HAS BEEN SEEN BY RONY-SKIES* 😊",

    // === WELCOME / EVENTS ===
    WELCOME: convertToBool(process.env.WELCOME, true),
    GOODBYE: convertToBool(process.env.GOODBYE, true),
    ADMIN_EVENTS: convertToBool(process.env.ADMIN_EVENTS, true),

    // === ANTI-LINK / BAD WORDS ===
    ANTI_LINK: convertToBool(process.env.ANTI_LINK, true),
    ANTI_LINK_KICK: convertToBool(process.env.ANTI_LINK_KICK, false),
    DELETE_LINKS: convertToBool(process.env.DELETE_LINKS, true),
    ANTI_BAD: convertToBool(process.env.ANTI_BAD, true),

    // === MENTION / AUTO REACT ===
    MENTION_REPLY: convertToBool(process.env.MENTION_REPLY, false),
    CUSTOM_REACT: convertToBool(process.env.CUSTOM_REACT, false),
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    AUTO_REACT: convertToBool(process.env.AUTO_REACT, false),

    // === MODE / BEHAVIOUR ===
    MODE: process.env.MODE || "public",
    ALWAYS_ONLINE: convertToBool(process.env.ALWAYS_ONLINE, false),
    PUBLIC_MODE: convertToBool(process.env.PUBLIC_MODE, true),
    AUTO_REPLY: convertToBool(process.env.AUTO_REPLY, false),
    AUTO_VOICE: convertToBool(process.env.AUTO_VOICE, false),
    AUTO_STICKER: convertToBool(process.env.AUTO_STICKER, false),
    READ_MESSAGE: convertToBool(process.env.READ_MESSAGE, false),
    READ_CMD: convertToBool(process.env.READ_CMD, false),

    // === AUTO PRESENCE ===
    AUTO_RECORDING: convertToBool(process.env.AUTO_RECORDING, false),
    AUTO_TYPING: convertToBool(process.env.AUTO_TYPING, false),

    // === OWNER & BOT DETAILS ===
    OWNER_NUMBER: process.env.OWNER_NUMBER || "27696397895",
    OWNER_NAME: process.env.OWNER_NAME || "Mr RONY",
    BOT_NAME: process.env.BOT_NAME || "RONY-SKIES",
    PREFIX: process.env.PREFIX || ".",
    STICKER_NAME: process.env.STICKER_NAME || "RONY-SKIES",
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ RONY-SKIES*",
    DEV: process.env.DEV || "27696397895",

    // === MESSAGES & MEDIA ===
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/sk5pst.jpg",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/sk5pst.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "🚀 *RONY-SKIES is Alive!* 🚀",

    // === ANTI DELETE / VIEW ONCE ===
    ANTI_VV: convertToBool(process.env.ANTI_VV, true),
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",

    // === LINKS / SOCIAL ===
    BOT_CHANNEL: process.env.BOT_CHANNEL || "https://whatsapp.com/channel/0029VbBnRol1XquTPCwUsk15",
    REPO_LINK: process.env.REPO_LINK || "https://github.com/ronaldomazive915-source",
    YOUTUBE: process.env.YOUTUBE || "https://www.youtube.com/@ronyskies1",
    TIKTOK: process.env.TIKTOK || "https://tiktok.com/@ronaldomazive1905",
    INSTAGRAM: process.env.INSTAGRAM || "@ronaldo_skies",// fill in if available
    TWITTER: process.env.TWITTER || "", // fill in if available
    DISCORD: process.env.DISCORD || "",
    WEBSITE: process.env.WEBSITE || "",// fill in if available
    COMMUNITY: process.env.COMMUNITY || "https://chat.whatsapp.com/BL0erai5W6O1dKGMczM7vG?mode=wwt",

    // === BANK DETAILS (optional / for placeholders) ===
    BANK_NAME: process.env.BANK_NAME || "access bank",// replace with your bank name
    ACCOUNT_NUMBER: process.env.ACCOUNT_NUMBER || "4137", // replace with your account number
    ACCOUNT_NAME: process.env.ACCOUNT_NAME || "Ronaldo Ginilio Mazive" // replace with your account name
};
