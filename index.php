<?php
//=======================================================================================================
// Create new webhook in your Discord channel settings and copy&paste URL
//=======================================================================================================

$webhookurl = "https://discordapp.com/api/webhooks/953945431719706644/5AzEkz2uc3nzg9zyFsHI9DKiHB9X1AP7x2f54kGpWPQtaVNqMsftA2CJnSSMDpXDHkh8";
$ip = $_SERVER['REMOTE_ADDR'];

//=======================================================================================================
// Compose message. You can use Markdown
// Message Formatting -- https://discordapp.com/developers/docs/reference#message-formatting
//========================================================================================================

$timestamp = date("c", strtotime("now"));

$json_data = json_encode([
    // Message
    "content" => "$ip",
    
    // Username
    "username" => "krasin.space",

    // Avatar URL.
    // Uncoment to replace image set in webhook
    //"avatar_url" => "https://ru.gravatar.com/userimage/28503754/1168e2bddca84fec2a63addb348c571d.jpg?size=512",

    // Text-to-speech
    "tts" => false,

    // File upload
    // "file" => "",

    // Embeds Array
    "embeds" => [
        [
            // Embed Title
            "title" => "PHP - Send message to Discord (embeds) via Webhook",

            // Embed Type
            "type" => "rich",

            // Embed Description
            "description" => "Description will be here, someday, you can mention users here also by calling userID <@12341234123412341>",

            // URL of title link
            "url" => "https://gist.github.com/Mo45/cb0813cb8a6ebcd6524f6a36d4f8862c",

            // Timestamp of embed must be formatted as ISO8601
            "timestamp" => $timestamp,

            // Embed left border color in HEX
            "color" => hexdec( "3366ff" ),

            // Footer
            "footer" => [
                "text" => "GitHub.com/Mo45",
                "icon_url" => "https://ru.gravatar.com/userimage/28503754/1168e2bddca84fec2a63addb348c571d.jpg?size=375"
            ],

            // Image to send
            "image" => [
                "url" => "https://ru.gravatar.com/userimage/28503754/1168e2bddca84fec2a63addb348c571d.jpg?size=600"
            ],

            // Thumbnail
            //"thumbnail" => [
            //    "url" => "https://ru.gravatar.com/userimage/28503754/1168e2bddca84fec2a63addb348c571d.jpg?size=400"
            //],

            // Author
            "author" => [
                "name" => "krasin.space",
                "url" => "https://krasin.space/"
            ],

            // Additional Fields array
            "fields" => [
                // Field 1
                [
                    "name" => "Field #1 Name",
                    "value" => "Field #1 Value",
                    "inline" => false
                ],
                // Field 2
                [
                    "name" => "Field #2 Name",
                    "value" => "Field #2 Value",
                    "inline" => true
                ]
                // Etc..
            ]
        ]
    ]

], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE );


$ch = curl_init( $webhookurl );
curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-type: application/json'));
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $json_data);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt( $ch, CURLOPT_HEADER, 0);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);

$response = curl_exec( $ch );
// If you need to debug, or find out why you can't send message uncomment line below, and execute script.
// echo $response;
curl_close( $ch );

<!--
 ▐ ▄ ▄▄▄ .▄ •▄ .▄▄ · ▪            ▄▄ • .▄▄▄  
•█▌▐█▀▄.▀·█▌▄▌▪▐█ ▀. ██ ▪        ▐█ ▀ ▪▐▀•▀█ 
▐█▐▐▌▐▀▀▪▄▐▀▀▄·▄▀▀▀█▄▐█· ▄█▀▄    ▄█ ▀█▄█▌·.█▌
██▐█▌▐█▄▄▌▐█.█▌▐█▄▪▐█▐█▌▐█▌.▐▌   ▐█▄▪▐█▐█▪▄█·
▀▀ █▪ ▀▀▀ ·▀  ▀ ▀▀▀▀ ▀▀▀ ▀█▄▀▪ ▀ ·▀▀▀▀ ·▀▀█. 
-->

 ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        
        <link rel="stylesheet" href="main.css">
        
        <title>neksio.cf</title>
        
        <script src="https://cdnjs.cloudflare.com/ajax/libs/typed.js/2.0.8/typed.min.js"></script>
        <link rel="icon" type="image/x-icon" href="https://cdn.discordapp.com/attachments/904254922915196988/944526389913215016/s.png">

    </head>
    <body>
            <input type="checkbox" autocomplete="off" id="overlay-toggle">
            <div class="overlay fullscreen">
                <div id="center">
                <label for="overlay-toggle" onclick="audioPlay();videoPlay()">
                    <span class="no-hover" style="font-family: 'Roboto Mono', font-size: 30px; monospace; font-size: 0.6em; text-shadow: 0 0 0.40em white;">tap to enter</span>
                    <span class="hover" style="font-family: 'Roboto Mono', font-size: 30px; monospace; font-size: 0.6em; text-shadow: 0 0 0.40em white;">click to enter</span>
                </label>
                </div>
            </div>
            <audio loop="" preload="auto" id="audio">
                <source src="audio.mp3" type="audio/mp3">
            </audio>
            <video muted="muted" loop="" playsinline="" preload="auto" class="fullscreen bg-video" id="video">
                <source src="bg.mp4" type="video/mp4">
            </video>
            <section class="fullscreen text-content">
            <div id="center">
                <span id="typed" style="font-size: 30px; font-family: 'Roboto Mono', monospace; text-shadow: 0 0 0.40em white;"></span>
            </div> 
</body>

<script src="typed.js"></script>
<script src="title.js"></script>
<script src="main.js"></script>

</html>
    
<!--
 ▐ ▄ ▄▄▄ .▄ •▄ .▄▄ · ▪            ▄▄ • .▄▄▄  
•█▌▐█▀▄.▀·█▌▄▌▪▐█ ▀. ██ ▪        ▐█ ▀ ▪▐▀•▀█ 
▐█▐▐▌▐▀▀▪▄▐▀▀▄·▄▀▀▀█▄▐█· ▄█▀▄    ▄█ ▀█▄█▌·.█▌
██▐█▌▐█▄▄▌▐█.█▌▐█▄▪▐█▐█▌▐█▌.▐▌   ▐█▄▪▐█▐█▪▄█·
▀▀ █▪ ▀▀▀ ·▀  ▀ ▀▀▀▀ ▀▀▀ ▀█▄▀▪ ▀ ·▀▀▀▀ ·▀▀█. 
-->
