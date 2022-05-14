function ValidationForm()
{
    let user = document.getElementById("user").value;
    let email = document.getElementById("email").value;
    let mnumber = document.getElementById("pno").value;
    let password = document.getElementById("pass").value;
    let cpassword= document.getElementById("cpass").value;

// userName validation
    if(user== "")
    {
        document.getElementById("uname").innerHTML="**Please Fill UserName";
        return false;
    }
if((user.length<=2) || (user.length>20))
{
    document.getElementById("uname").innerHTML="** plase userName b/w 3 to 20 words!";
    return false;
}
if(!isNaN(user))
{
    document.getElementById("uname").innerHTML="** only charcter are allowed ";
    return false;
}
else
{
    document.getElementById("uname").innerHTML=""; 
}

// user email Validation
    if(email== "")
    {
        document.getElementById("uemail").innerHTML="**Please Fill User Email Id";
        return false;
    }
    if(email.indexOf('@')<= 0)
    {
        document.getElementById("uemail").innerHTML="**Please Fill valid  Email Id (ex@113gmil.com)";
        return false; 
    }
    if((email.charAt(email.length-4)!= '.') && (email.charAt(email.length-3)!= '.'))
    {
        document.getElementById("uemail").innerHTML="**Please Fill valid  Email Id (ex@113gmil.com)";
        return false;
    }
    else
{
    document.getElementById("uemail").innerHTML=""; 
}

// user number Validation    
    if(mnumber== "")
    {
        document.getElementById("uph").innerHTML="**Please Fill User Mobile Number";
        return false;
    }
    if(isNaN(mnumber))
    {
        document.getElementById("uph").innerHTML="**Please Fill only number charcter not allowed ";
        return false;  
    }
    if((mnumber.length!=10) || (mnumber.length>10))
    {
        document.getElementById("uph").innerHTML="**Please Fill valid number (10 digit number only)";
        return false;  
    }
    else
    {
        document.getElementById("uph").innerHTML=""; 
    }

    // user password Validation
    if(password== "")
    {
        document.getElementById("upass").innerHTML="**Please Fill Password";
        return false;
    }
    if((password.length<=5) || (password.length>20))
{
    document.getElementById("upass").innerHTML="** plase password b/w 6 to 20 words!";
    return false;
}
else
    {
        document.getElementById("upass").innerHTML=""; 
    }
if(password!=cpassword)
{
    document.getElementById("ucpass").innerHTML="** plase password are not matching";
    return false; 
}

    if(cpassword== "")
    {
        document.getElementById("ucpass").innerHTML="**Please Fill Confirm Password";
        return false;
    }
    else
    {
        document.getElementById("ucpass").innerHTML=""; 
    }
}