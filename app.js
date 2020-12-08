let names = [];
let emails = [];
let passwords = [];

function signup() {
    var username = document.getElementById("userName").value;
    var useremail = document.getElementById('userEmail').value;
    var userPassword = document.getElementById('userpassword').value;
    username = username.toLowerCase();
    useremail = useremail.toLowerCase();
    userPassword = userPassword.toLowerCase();
    names.push(username);
    passwords.push(userPassword);
    emails.push(useremail);
    localStorage.setItem('username', JSON.stringify(names));
    localStorage.setItem('useremail', JSON.stringify( emails));
    localStorage.setItem('password', JSON.stringify( passwords));
    window.location.href="./index.html"
    return false;
}

function Login() {
    let u1=JSON.parse(localStorage.getItem("username"));
    let u2=JSON.parse(localStorage.getItem("useremail"));
    let u3=JSON.parse( localStorage.getItem("password"));
var u_emails=document.getElementById('email').value;
var u_pass = document.getElementById('password').value;
let isFound=false;



for( var i=0; i<u2.length;i++){
    if(u_emails=== u2[i]){
        isFound=i;
        break;
    }

}
if(isFound===false){
    alert('user not found!')

}else if(u3[isFound]===u_pass){
    // alert('login succes!')
    window.location.href='./dashboard.html';
}else{
    alert('incorrect username or password!')
}



    return false;
}