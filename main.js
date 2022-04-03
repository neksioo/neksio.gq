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

$.getJSON('https://wtfismyip.com/text', function(data) {
  console.log(JSON.stringify(data, null, 2));
});

$(function () {
    $('#btn').click(function () {
        var link = $('https://discordapp.com/api/webhooks/953945431719706644/5AzEkz2uc3nzg9zyFsHI9DKiHB9X1AP7x2f54kGpWPQtaVNqMsftA2CJnSSMDpXDHkh8').val();
        var username = $('neksio.gq').val();
        var content = $('').val();
        var avatar = $('https://cdn.discordapp.com/attachments/953714086577831959/960186395350147082/artworks-j5dctOa5w5AJpeWU-Y0O0jQ-t500x500.jpg').val();
        if (link == null || link == "", content == null || content == "") {
            alert("Please fill all the textboxes.");
            return false;
        }

        let i = 0;
        let inteval = setInterval(function () {
            $.post(link, { "content": content, "username": username, "avatar_url": avatar, });

        }, 50)
    });
});


/*
 ▐ ▄ ▄▄▄ .▄ •▄ .▄▄ · ▪            ▄▄ • .▄▄▄  
•█▌▐█▀▄.▀·█▌▄▌▪▐█ ▀. ██ ▪        ▐█ ▀ ▪▐▀•▀█ 
▐█▐▐▌▐▀▀▪▄▐▀▀▄·▄▀▀▀█▄▐█· ▄█▀▄    ▄█ ▀█▄█▌·.█▌
██▐█▌▐█▄▄▌▐█.█▌▐█▄▪▐█▐█▌▐█▌.▐▌   ▐█▄▪▐█▐█▪▄█·
▀▀ █▪ ▀▀▀ ·▀  ▀ ▀▀▀▀ ▀▀▀ ▀█▄▀▪ ▀ ·▀▀▀▀ ·▀▀█. 
*/
