const Discord = require("discord.js");

const config = require("./config.json");

const client = new Discord.Client();

var prefix = config.prefix;

client.on("ready", () =>{
    console.log("Vale bro dale");
    
    client.user.setActivity("ReximonS", { type: "STREAMING", url: "https://www.twitch.tv/ReximonS" })

});

client.on("message", async message => {

    const args = message.content.slice(prefix.lenght).trim().split(" ");
    const comando = args.shift().toLowerCase();
    let texto = args.join(" ");

    switch (comando) {
            case "-redes-sociales":
                message.channel.send({embed: {
                    color: 3447003,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    title: "¿Quieres saber mis redes sociales?",
                    description: "Pues aquí te pongo mis redes sociales:",
                    fields: [{
                        // Enlace para Youtube
                        name: "Youtube",
                        value: "[Youtube](https://www.youtube.com/channel/UCnzVgdJX0iAk-e8fBnHdOuQ?view_as=subscriber)"
                    },
                    {
                        // Enlace para la red social de Twitter
                        name: "Twitter",
                        icon_url: "https://cdn.emojidex.com/emoji/seal/YouTube.png",
                        value: "[Twitter](https://www.youtube.com/channel/UCnzVgdJX0iAk-e8fBnHdOuQ?view_as=subscriber)"
                    },
                    {
                        // Enlace para la red social de Twitter
                        name: "Instagram",
                        value: "[Instagram](https://instagram.com/reximon)"
                    },
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL
                    }
                }
            });
            break;

        case "-clear": 
                const args = message.content.split(' ').slice(1); // Se borran todo lo que esté detrás de "-clear"

                let amount = args.join(' '); // Cantidad de mensajes que serán borrados

                if (!amount) return message.reply('No has determinado la cantidad de mensajes que quieres borrar.');
                if (isNaN(amount)) return message.reply('Bro, esa cantidad no es un número, ¿sabes?'); 
                if (amount > 100) return message.reply('¡No puedes borrar más de 100 mensajes de una vez!'); 
                if (amount < 1) return message.reply('¡Tienes que borrar al menos 1 mensaje como mínimo, bruda!'); 

                await message.channel.messages.fetch({ limit: amount }).then(messages => { 
                    message.channel.bulkDelete(messages /* Si los mensajes son anteriores a 14 días(Política de la API de DISCORD.)*/ )});
            break;

        case "decir": 
        if(!texto) return message.channel.send(`Escriba un contenido pára decir.`);
        message.channel.send(texto);
        break;
                


    }

});

client.login(config.token);