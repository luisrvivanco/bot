const qrcode = require('qrcode-terminal');//llama  a la libreria de qrcode-terminal de whatsapsp

const { Client, LocalAuth } = require('whatsapp-web.js');//dewsp   y los datos son de forma local
const botExpress = new Client({
    authStrategy: new LocalAuth()
});

botExpress.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });//generando el QR
});

botExpress.on('ready', () => {
    console.log('Client is ready!');
});

botExpress.on('ready', async ()=>{
    await botExpress.sendMessage('5492644709107@c.us', 'Me conecte') 
    console.log('me conecte y envie mensaje')
    
    //* 549261532145@c.us // num.privado
    // 1234412334114@gc.us // GRUPO


})//llamar al celular


botExpress.on('message', async(data) =>{

    if(data.from === '123123123@g.us' && data.body === '!todos'){
        botExpress.sendMessage(data.from,"aca deberia mencionar a todos")
    }

    //  if(data.from.includes('@g.us')) return console.log('me hablo un grupo y no quiero hablar con el')

     if(data.from === '120363235804277013@g.us'){
        switch(data.body){
            case "/help":
                botExpress.sendMessage(data.from, '/curso, /walter')
                return;
            case "/curso":
                botExpress.sendMessage(data.from, 'Estamos viendo los cursos 2024')
                return;
            case "/test":
                botExpress.sendMessage(data.from, 'al palo')
                return;
        }

     }


})  //la parte de repuesta de whatsapp // data es la info del mensaje id, etc
// se saca  console.log(data) sino me va repetir la info varias veces
botExpress.initialize();
