//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "caxtontechnologies291@gmail.com";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://photos.app.goo.gl/pZfcgyUmBmgJ6ERy9";
global.devs = "234906628353";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "254798033844";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://photos.app.goo.gl/pZfcgyUmBmgJ6ERy9";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUg5b2M3d083N3dRdDZTbDZiL3NZdUJ0MmNpSHNUMkdhdzNlZUQrcmlWTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUWdWWEkxZXlaY1AzSmkzVTRPYXVnWUF3QnQxYWxDVXRuV2FZK2JkcWVRQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQjNWYUJTSGtsVWhEWDVjV2hSSkxJd2J5MnU5VG9TTjhtSS96azdZYUc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoRjZEL2JvSVpCVTZ2TFU0TXRyb2JUV0NQbEI3UDQ1NUpESVFkeVJhM3dBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlMTEY4U2o4UjB3K3hSTjF4RVNhL2VucDBvYlpQMkRMTHE5dWIyTXU0bU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdORWFVbUtNL3FWZ2JTUXdzNEw4Z3M5NlJTeE9ucXdDM1dhUldETk1vVHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlJTnRJZzgraFYwZWViTm9ySnNiRjlDYlE5S3dXZzFybE9aMUttMURIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ3ZXZ2UrOUllSUQxZ3lCOHR2SzVFN1VqRU8welkzRHNvN1EzS3lPNThuRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRSN1dxeC94dDRxcExCRlpGZEJmaTN0MVF2cEFMSE1XT0RRNVNjaU5yUVhQbTlXUHFhQkVlUmdXbFQ0bEdQQ0thY1dHeEJ1WmE2NzlkRERKY3FyQWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUzLCJhZHZTZWNyZXRLZXkiOiJkQ2g5bUlTR2Fzb01jSGQ2MFdOaU04K2NUVHdmcG9sL2VtWktJWkZsdkxNPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBNjNrZmZDdlRpNlZtLUI3U0lITnVnIiwicGhvbmVJZCI6ImY2OTY1ZTMzLTBiNzMtNDI5My1iZjQ3LTRmNWIyZmFlYzE3MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBbVVuUW5VWTlPTytWN3MvSGExdlYrV2J1MWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRHRqTjRyWEVOa2tQVER0dnU3WU5nd2FybS9JPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlAyRFg1U0hNIiwibWUiOnsiaWQiOiIyNTQ3OTgwMzM4NDQ6MzRAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01hVjI3QUZFT2Z3aXJVR0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFvOERlTzRDN3JLMkh4L3k4WHRHWkd2eWNjaFVnU09mVGNKTHlvdFlzRDQ9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImRXc0I5dUc0dGpVK2FlQlEzNnJpQldERlIvb0dIRnJBVHFzdzVrc29HNEoyVGVhN3BjdVhkT0toL1EvbXlPVU03SXBzdXJZQ1B5VWk5WklRUnhKRURRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJYWThoQUg5UHRuOXIzckNWblJqWC9VVE15TWZHQVhRYVltYjVrVEREbnp6VE9BZ240RUt4a3lIK2RodnR2c0QrazZaWFpZM0lScmNpZEJyR3VyL3Jpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDc5ODAzMzg0NDozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRS1BBM2p1QXU2eXRoOGY4dkY3Um1ScjhuSElWSUVqbjAzQ1M4cUxXTEErIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIxOTQwMDg0fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "Caxton Derick",
  author: process.env.PACK_AUTHER || "Caxton",
  packname: process.env.PACK_NAME || "Derick",
  botname: process.env.BOT_NAME || "Caxton Derick",
  ownername: process.env.OWNER_NAME || "Caxton Derick",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
