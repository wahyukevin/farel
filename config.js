const
  discord = require("discord.js-selfbot-v13");
 
function reloadPresence(client) {
    const activity = new discord.RichPresence()
      //more command https://discordjs-self-v13.netlify.app/#/docs/docs/main/class/RichPresence or https://github.com/aiko-chan-ai/discord.js-selfbot-v13/blob/main/Document/RichPresence.md
        .setApplicationId("383226320970055681") //You can replace with your own bot application id
        .setType("PLAYING") //PLAYING, STREAMING, LISTENING
        .setName("Visual Studio Code") //name of your activity
        .setDetails("Editing index.js") //detail activity📝 
		.setState("Workspaces: My-Project") //state activity 
        //.setStartTimestamp(global.startTime)
        .setStartTimestamp(global.startTime)
        .setAssetsLargeImage("mp:app-assets/383226320970055681/808841241142755358.png")
        .setAssetsLargeText("Editing JS file")
        .setAssetsSmallImage("mp:app-assets/383226320970055681/565945770067623946.png")
        .setAssetsSmallText("Visual Studio Code")
        //.addButton('Facebook', "https://www.facebook.com/zaxerionn")
        //.addButton('Paypal', "https://paypal.me/zaxerion")
    client.user.setActivity(activity.toJSON())
    client.user.setStatus("dnd")
};
module.exports = reloadPresence;
