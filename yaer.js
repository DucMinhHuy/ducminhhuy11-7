let year = parseInt(prompt("nhập vào"));
if (year%4==0&&year%100!=0){
    alert ("nhuan");
}
else if(year%100==0&&year%400==0){
    alert("nhuan");
}
else {
    alert("khong nhuan");
}