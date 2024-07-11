//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "frediezra60@gmail.com";
global.location = "Arusha,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Fred1e/Fredi_md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/a8b74780a8d18240b1d82.jpg";
global.devs = "255742862266";
global.sudo = process.env.SUDO || "255686745716,255764182801,255620814108";
global.owner = process.env.OWNER_NUMBER || "255686745716";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1OSGVna3BOcSt0WGdNQ3NoaVVXVkV6bFNhaEhIQ095aWZHVG5UdFNIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibFpLL0J0SW9tTkxoeDRjNjFZMEMrRVFEY0tEOHlXNVZqSkZWM2xyTWR3Zz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZQzhNNlBER1dIYThEajJvbHpibHpIcmMwNldXRVFaWDBOUEdRWnRyQm44PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoTlovMHNBbHB2NDdiM2VpQ01PTlhXbUxrMVdGcDRkcVRmeE5MUUcyY1FrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFJa3hYdXRZU3plZmNjd2dCTVFNY2xvQW5ST0d2WndrbVlmdFhmTkV2a009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFPYVhuL2VjaFg5eG4wV3BNY2hmVU13ZGNHRUIvcTBjU2dOcmNDaVRaVkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUZjUXk4eURNZW5PL0ZUQnJKdGpCOHNaSjdrRGhCcTZSTnBiNzZtMmxuVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMDc2eWVVeGEyT1VzcjdqdlpYK0FvUE1qbGhaVlA4UjVoZTNIVUZHTGZWaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlA3Mk5rSWlsYkhrVm1iM1J6ZkZNb2xEd3hQenFkbW5xbkEwVU56aGJpZG5UZzcvNlU5QTUxeG1DWjM1TWh3N2phNzAzYWI0SC9HQWFDa3VxWmgxMWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTksImFkdlNlY3JldEtleSI6Im9ESGMxNEdjT1diV3BkTTBHL2RtQ2RoT0U4NkU0dDRobXovSnVKRHU1U1E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImJNMnZYbFYtUXotbk54cHRXSkhCM3ciLCJwaG9uZUlkIjoiZDliMTQzYWEtMWJmNC00ZmZlLTk5MTMtYTE0ZjhhMWFkN2I1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVValJncGVFZUZCWFN6amtkQ1ZBNklRWmN5OD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhTzhWSEFWejBMYkNaWUJEdGN5VFFwdEw3TWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiV01KS01QVFAiLCJtZSI6eyJpZCI6IjI1NTY4Njc0NTcxNjoyMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWZ2Z3RzSEVKZld3TFFHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiZGJ4djZEVnduZVRCMGtsSVVOMERqRVJ3bnRWazVDM2YxYVN6Z0t6NGdoaz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiWHMrZ1Ewc0h0cDNRNHZncjRWV3ZqK0xxMGZMK3QwWGI1V2J4MTZOTjRWS2JuZTJWdUdNUDB4OW10UGlRR3BFQ2FCdFBWY2x6VDNqVm54VElQOW9SQmc9PSIsImRldmljZVNpZ25hdHVyZSI6InduQzc5TUp4YW16WWF2Rm1JUVpUUE5rQTd1VFY4WGRheCtubkJIUTYxNjFxMkMzd2VScmZJZnVnSGpPNVIxWWRZbm9Fc29JOUlOUWYwbnNjN0RlQmhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU1Njg2NzQ1NzE2OjIxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlhXOGIrZzFjSjNrd2RKSlNGRGRBNHhFY0o3VlpPUXQzOVdrczRDcytJSVoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA3MjQyNjAsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQmxzIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is FREDI_MD",
  author: process.env.PACK_AUTHER || "FREDI_MD",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "FREDI_MD",
  ownername: process.env.OWNER_NAME || "FREDI",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "FREDI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
