function checkEmail(email) {

    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email))
    alert("Please enter a valid email address");
    console.log(re.test(email));
    return re.test(email);
}

var my_func = function(event) {
    event.preventDefault();
    localStorage.clear();
    /*Getting values from html tags*/
    var lastname=document.querySelector("input[Name=lastname]");
    var firstname=document.querySelector("input[Name=firstname]");
    var email=document.querySelector("input[Name=email]");
    var e = document.getElementById("country");
    var country = e.options[e.selectedIndex].text;
    var msg=document.querySelector("#subject");
    /*Validations - except for the mail*/
    if((lastname.value.length ==0)||(firstname.value.length ==0) ||(msg.value.length ==0))
        {alert("Please Fill all fields");}
        else {
          /* adding data to localstorage*/
          const obj={
              firstname:firstname.value,
              lastname:lastname.value,
              email:email.value,
              country:country,
              msg:msg.value
          }
          console.log(obj);
          localStorage.setItem('clientMSG', JSON.stringify(obj));

        }
    /*  if(lastname.value.length>0)
        lastname.style.borderColor="##006400";
    */

};

// your form
var form = document.querySelector("form");

// attach event listener
form.addEventListener("submit", my_func, true);
