function fun(){

    // this is for name validation
   uname=document.getElementById("uname").value;
    
   if(uname==""){
    document.getElementById("umsg").innerHTML="please enter username";
    document.getElementById("uname").style.border="2px solid red"
    return false;
    }
   
    if(uname.length<5 || uname.length>10){
    document.getElementById("umsg").innerHTML="please enter correct length";
    document.getElementById("uname").style.border="2px solid red"
    return false;
    }
   
   upp = 0
   low = 0
   for (i = 0; i < uname.length; i++) {
       if (uname.charCodeAt(i) >= 65 && uname.charCodeAt(i) <= 90) {
       upp = 1
       }
   
       else if (uname.charCodeAt(i) >= 97 && uname.charCodeAt(i) <= 122) {
       low = 1
       }
   }
               
   if (upp !== 1 || low !== 1) {
   document.getElementById("umsg").innerHTML="please enter a uppercase letter";
   document.getElementById("uname").style.border="2px solid red"
   return false;
   }
   else{
    document.getElementById("umsg").innerHTML="";
    document.getElementById("uname").style.border="4px solid green"
    }
   
   // this is for email validation
     
   email=document.getElementById("email").value;
   
   if(email==""){
   document.getElementById("emsg").innerHTML="please enter Email";
   document.getElementById("email").style.border="2px solid red"
   return false;
   }
   
   if(email.charAt(email.length-3)!="." && email.charAt(email.length-4)!="."){
   document.getElementById("emsg").innerHTML="please enter .com or .in";
   document.getElementById("email").style.border="2px solid red"
   return false;
   } 
   
   AttheRate=0
   for(i=0;i<email.length;i++){
   if(email.charCodeAt(i)>=64 && email.charCodeAt(i)<=65){
   AttheRate=1
   }
   }
   if(AttheRate==0){
   document.getElementById("emsg").innerHTML="@ is necessary in the Email";
   document.getElementById("email").style.border="2px solid red"
   return false;
   }
   
   else{
    document.getElementById("emsg").innerHTML="";
    document.getElementById("email").style.border="4px solid green"
    }
   
    //password validation
   
    pass=document.getElementById('pass').value;
   
    if (pass == ""){
   document.getElementById("pmsg").innerHTML="Please Enter the password";
   document.getElementById("pass").style.border="2px solid red"
   return false;
   }
   
   if (pass.length<8 || pass.length>12) {
   document.getElementById("pmsg").innerHTML=" Password lenght must be Between 8 to 12";
   document.getElementById("pass").style.border="2px solid red"
   return false;
   }
   
   let up = 0
   let lo = 0
   let num = 0
   let spc = 0
   
   for (i = 0; i < pass.length; i++){
   
           if (pass.charCodeAt(i) >= 64 && pass.charCodeAt(i) <= 90) { //capital letters
           up = 1
           }
   
           else if (pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) { //small letters
            lo = 1
            }
   
           else if (pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) { //number 0 to 9
           num = 1
           }
   
           else if (pass.charCodeAt(i) >= 33 && pass.charCodeAt(i) <= 38) { //special !,",#,$,%,&
           spc = 1
           }
   }
   
   if (up !== 1 || lo !== 1 || num !== 1 || spc !== 1) {
     document.getElementById("pmsg").innerHTML="password should have upper, number, special character";
     document.getElementById("pass").style.border="2px solid red"
   return false;
   }
   
   else{
    document.getElementById("pmsg").innerHTML="";
    document.getElementById("pass").style.border="4px solid green"
    }
   
   // Mobile Number
   
   mob=document.getElementById("mob").value
   
   if (mob == "") {
   document.getElementById("mnmsg").innerHTML="Enter Mobile Number";
   document.getElementById("mob").style.border="2px solid red"
   return false;
   }
   
   if (mob.length != 10){
   document.getElementById("mnmsg").innerHTML="Pls Enter 10 digit Mobile Number only";
   document.getElementById("mob").style.border="2px solid red"
   return false;
   }
   
   for(i=0; i<mob.length; i++){
   
   if(mob[0] != 6 && mob[0] != 7 && mob[0] != 8 && mob[0] != 9) {
   document.getElementById("mnmsg").innerHTML="Mobile should start from 6,7,8,9";
   document.getElementById("mob").style.border="2px solid red"
   return false;
   }
   else{
    document.getElementById("mnmsg").innerHTML="";
    document.getElementById("mob").style.border="4px solid green"
   }
   }
   
   // terms and condition checkbox 
   
   if(f1.check2.checked==false){
     document.getElementById("check").innerHTML="Please Accept the terms and condtion";
   return false;
   }
   
   }