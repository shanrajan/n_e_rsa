function Rinp(){
    var uname=document.forms["myform"]["uname"].value;
    var umail=document.forms["myform"]["umail"].value;
    var upas=document.forms["myform"]["upas"].value;


    if(uname==null|| uname==""){
        document.getElementById("errorBox").innerHTML="enter the user name";
        return false;
    }

    if(umail==null|| umail==""){
        document.getElementById("errorBox").innerHTML="enter the mail id";
        return false;
    }

    if(upas==null|| upas==""){
        document.getElementById("errorBox").innerHTML="enter the password";
        return false;
    }

    if(uname !=''|| umail !='' || upas !=''){
        alert("registered successfully")
    }
}





function linp(){

    var lumail=document.forms["mylform"]["lumail"].value;
    var lupas=document.forms["mylform"]["lupas"].value;


    if(lumail==null|| lumail==""){
        document.getElementById("errorBox").innerHTML="enter the mail id";
        return false;
    }

    if(lupas==null|| lupas==""){
        document.getElementById("errorBox").innerHTML="enter the password";
        return false;
    }

    if( lumail !='' || lupas !=''){
        alert("Logined successfully")
    }
}