//#ENJOY BRO😍
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kgtech-cmr/KERM_MD-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "47567596";
global.owner = process.env.OWNER_NUMBER || "47567596";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-39mi.onrender.com/wasiqr";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09XNzFEVDdCT29TQ3d4VWV2S0ZUMzNiRWx0MkhseE9zSXdNOG5INnQyZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRVArc3ZjUUxQYlE5ODFCaG1nOWxqcnZNZkhPbEprQ0xFR2VrbFlVRS9pdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSytFcWVzeWdqSGpYUG1rYnFJMFA3TzlrNlhRNXgvWmJDTktXY1lKMkZjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJybFNxM201eUgxZWlSaEdlRnc1YU5oWGMxVEtPZ3VWM0M3WlAvY2lMeVNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZLUXJFT0g5S3RPMnc3ODJRRUpmRkd5UVJ4L1k1Q0FuMWdOMWNCRC8vM0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9RSDRSeHFWSVArbzRnUDJXOUtiL0ZhVy9YcUtSUUJuUHFOblFCdkR4ak09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic1BndVhhUkdkL08vbGFJb09jdzRxTkpjUzI1TzFrOG1tcTkyUzlQT2wzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVU43UC9INmh1WHRqb3pRTXNSNzFCWWcxcFBjSkZ3S3pjOTloT2J1S3Bpbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndPYkUwbEZYN1dZSWFCb1VVMWpzRk9ldmlQVmJRQUdHeUtLcnphZ2phNkxQQnRTVFFqVE9rWXlUd2hNOWE1eEovUnBXRElZYU5ZY3ArbStxRDhEQ2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6Im8rSFZOM3MvUkgrcFUyQk96TGJZUXQ0Y1ZFK0hIODRZTC9JR0o5QWRCQkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiNTA5NDc1Njc1OTZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzYxOTU0NzgzMzlGRDNDMDk0NUU3MDk3OEFBNDlFNUIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMzkyODA3MH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMUYzaThwaWtUd3FNc3I2SlFEbS1vdyIsInBob25lSWQiOiJhNmMwNDg3MS00MzFjLTRiYjQtOGM2Ni05YzJlY2U1ODJmYWUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUg1dXBkcXdCMjZmOGlWc2tvWGV4R0NwSXY0PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdLbThSbUQ3Y0J5LzMvR3NocHFHME9jREdUND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJRRktBVENRUyIsIm1lIjp7ImlkIjoiNTA5NDc1Njc1OTY6MTBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQUxQSEEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0orUjFjOEhFUFdiaExZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IktmMzhKOERTV1E4Q0hBR0tSRjJoSHhWQkRZcUgxSTllaXpRUjlQSTZmRUU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImJGS3l0ZUl5NHY5cnBoQlp2aTR6Z1pTRHR0TmpPbCtqZncxNmIrL1djYWVabEVCcmE0ZU9SZ05Lc1hYSHhqcjZEa0Z4L3lTaWVMdTBweDJOU1RBMUFnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWSTBpQzhPTS9nNkRqMFJVWC96UmhoREZtbTE1NkJ1aGRQVVQ5TVlIZ3Fnd1R4bXhnbDdzSWtVblF5QWNBeTJXYW4wRm1WajN4aHdxUGNVdmtoRitpdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjUwOTQ3NTY3NTk2OjEwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlNuOS9DZkEwbGtQQWh3QmlrUmRvUjhWUVEyS2g5U1BYb3MwRWZUeU9ueEIifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjM5MjgwNjYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUElxIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜ KG TECH⌝☜`",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "*ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐*",
  ownername: process.env.OWNER_NAME || "☞⌜ KG TECH⌝☜",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
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
