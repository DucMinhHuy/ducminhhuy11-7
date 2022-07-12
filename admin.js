let name = prompt("ten",'');
if (name == "Admin" ) {
    let pass = prompt("password", '');
    if (pass == "theMaster") {
        alert("Welcome");
    } else if (pass == "null") {
        alert("Canceled");
    } else {
        alert("dog phong password");
    }
}
else if (name =="null"){
    alert("Canceld");
}
else {
    alert("don`t know");
}