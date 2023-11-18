document.title = "Sign in to your account";







function checkRecaptcha() {
    var response = grecaptcha.getResponse();
    if(response.length == 0) { 
      //reCaptcha not verified
      console.log("no pass"); 
    }
    else { 
      //reCaptch verified
      localStorage.setItem("allowaccessapikeybody", allowaccessapikeybody);
    window.location.replace('home.html')
  
    }
  }
  
  // implement on the backend
  function backend_API_challenge() {
      var response = grecaptcha.getResponse();
      $.ajax({
          type: "POST",
          url: 'https://www.google.com/recaptcha/api/siteverify',
          data: {"secret" : "(your-secret-key)", "response" : response, "remoteip":"localhost"},
          contentType: 'application/x-www-form-urlencoded',
          success: function(data) { console.log(data); }
      });
  }
  
  
  
  setInterval(function(){
    document.getElementById('bxn').click()
  },1000)
  