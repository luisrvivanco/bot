const TelegramBot = require(`node-telegram-bot-api`);

//TOKEN QUE NOS EL BOT - NUESTRO BOT
const token  = `6334248808:AAHShxV3uzbH5AsE-pO_bUZeVz36f1_pD80`;

const bot =new TelegramBot(token, {polling:true});

bot.on(`message`, async (mensaje) =>{
    if(mensaje.from.is_bot) return console.log("Es bot ");
    const msg = mensaje.text.toLowerCase() //HOLA => Hola, HoLa =>hola (lleva todo a minuscula)
    if(msg.includes(`hola`)){// si contiene hola ."Hola, quiero saber a que se dedican"}
        await bot.sendMessage(mensaje.chat.id,`Hola ${mensaje.from.first_name} , Si nos dedicamos a XXX cosa.. te puedo ayudar`);
        return bot.sendMessage(mensaje.chat.id, "1-mis productos \n 2-mis redes")
    }
    if(msg.includes(`redes`) || msg === "2" ){
        await bot.sendMessage(mensaje.chat.id,"Genial seguinos en nuestras redes")
        await bot.sendMessage(mensaje.chat.id, "1-Linkedin \n2-Instagram \n3-Facebook")
        return
    }
    if(msg.includes(`productos`) || msg === "1" ){
        await bot.sendMessage(mensaje.chat.id,"Buenisimo, estos son mis productos")
        return bot.sendMessage(mensaje.chat.id, "1-Botas \n 2-Bolsaos")


    }
    })