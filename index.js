const
  { Client } = require('discord.js-selfbot-v13'),
  dotenv = require('dotenv'),
//HAPUS INI JIKA INGIN MENGGUNAKAN RPC SAMSUNG
  client = new Client({checkUpdate: false,}),
  reloadPresence = require("./config.js")
//^^HAPUS INI JIKA INGIN MENGGUNAKAN RPC SAMSUNG
// RPC DISCORD SAMSUNG GALAXY
//* client.on('ready', async () => {
    //client.user.setSamsungActivity('com.tencent.ig', 'START');
    // client.user.setSamsungActivity('com.miHoYo.bh3oversea', 'UPDATE');
     //client.user.setSamsungActivity('com.miHoYo.GenshinImpact', 'STOP');
//* });

dotenv.config();

if (!process.env.TOKEN) {
  console.error("Add a token inside Secrets.");
  process.exit();
}

client.login(process.env.TOKEN);

  console.clear();
/* //HAPUS INI JIKA INGIN MENGGUNAKAN RPC SAMSUNG
  client.on("ready", async () => {
        global.startTime = new Date();
        reloadPresence(client);
    })
*/ //^^HAPUS INI JIKA INGIN MENGGUNAKAN RPC SAMSUNG