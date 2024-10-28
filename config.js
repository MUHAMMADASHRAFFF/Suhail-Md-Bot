const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348169458472";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_13_17_10_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICA3MixcbiAgICAgICAgNjEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDY3LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA0MCxcbiAgICAgICAgMzksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDYxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzksXG4gICAgICAgIDgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMixcbiAgICAgICAgMjE4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNTEsXG4gICAgICAgIDExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDU2LFxuICAgICAgICAzNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDkwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwLFxuICAgICAgICAzNyxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAyLFxuICAgICAgICA3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTksXG4gICAgICAgIDE5LFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjIyLFxuICAgICAgICA1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTA4LFxuICAgICAgICA4MSxcbiAgICAgICAgMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgODcsXG4gICAgICAgIDAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDMsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDQyLFxuICAgICAgICA2OCxcbiAgICAgICAgMzIsXG4gICAgICAgIDU5LFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDcyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDMzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDM1LFxuICAgICAgICA5LFxuICAgICAgICA2LFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICA0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjEzLFxuICAgICAgICA0OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE4LFxuICAgICAgICA5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDYsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImMzK295OGRsc2ZBM3FqRU5iTWVuWlo0Z0wwU3F5UnFCS1RhWnlHNWorVXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInM1WUdzeldIUlRXNG5QZVNCTHEtMmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjA4MjNiYzItYjE1MC00MDg1LWI5ZGItNzhlNGMxNWNkZWY3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0LFxuICAgICAgMTI3LFxuICAgICAgMjM3LFxuICAgICAgMTUzLFxuICAgICAgMjM0LFxuICAgICAgMjI2LFxuICAgICAgMjMyLFxuICAgICAgMTgyLFxuICAgICAgNTcsXG4gICAgICA2LFxuICAgICAgMTUxLFxuICAgICAgNCxcbiAgICAgIDIzNSxcbiAgICAgIDExNCxcbiAgICAgIDkyLFxuICAgICAgMjE3LFxuICAgICAgNzcsXG4gICAgICA0MSxcbiAgICAgIDI1MyxcbiAgICAgIDExMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTIsXG4gICAgICAxMDAsXG4gICAgICA4OCxcbiAgICAgIDE2MixcbiAgICAgIDIyNSxcbiAgICAgIDE4MixcbiAgICAgIDEyMSxcbiAgICAgIDEwLFxuICAgICAgMTEzLFxuICAgICAgMTEsXG4gICAgICA5NyxcbiAgICAgIDU1LFxuICAgICAgOCxcbiAgICAgIDEyMixcbiAgICAgIDIyMixcbiAgICAgIDg1LFxuICAgICAgNTQsXG4gICAgICAxNjAsXG4gICAgICAxMSxcbiAgICAgIDE5OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBM0RaUTNSQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2OTQ1ODQ3MjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzMDUxMTUxNDc3OTc4OToyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xxRDJKQUVFTStkL3JnR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiT1luRXdWbVNyeUdGRkgyNmVXbmsrcVY2QXdXekEwV2VGYUh3eWFSandpdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJmOUZseFovZUJCRXp4dEhVVVYyZVV4ZDZkNEI1dmhwSXhuMnh1ZjdvTnA2NlNVUkhQamNnRUNCK0ZkNzRUVWNYUnR5bHE0ZHdkcmJ4NnNweWpmcGRDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKT2QvNDYvUVJ4RU9ndHIrQ2RhVlYzZXdiOG9SWnpPUnAvSzVzYzR1THBJZGdzRzl3c2gvc3pxTVV4Zy9RdXhJelRubkFIWEEvUGE3dXRxT2M0c25Cdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY5NDU4NDcyOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwMTIxNDI3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQ3pVXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDelUuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJadmNKZHpjRFhrM2plVXlaVGtRTDFNSUdTcnlvWWdwMjRDUTZ4aU01cGw0PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExMDg3Mzg0ODksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzAxMjEyNTE1NDFcIn0iCn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
