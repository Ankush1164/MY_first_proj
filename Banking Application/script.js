// let accountNo = document.getElementById("accountno");
// let inputvalue = document.getElementById("name").value;
// let openingBtn = document.getElementById("accountOpenBtn");
// openingBtn.addEventListener("click" , changedetails);
// const changedetails = () =>{
//     document.getElementById("username").innerText[0] = inputvalue;
//     let x = Math.floor(Math.random()* (2000 - 1000)) +  1000
//     accountNo.innerHTML = "3001485" + x;
// }

let btn = document.getElementById("accountOpenBtn")
btn.addEventListener("click" , myFun)
function myFun(){
    let inputvalue = document.getElementById("name").value; 
    let userName = document.getElementById("username");
    userName.textContent= inputvalue;
    if( inputvalue == " "){
        alert("enter value")
    }
    else{
        window.location.href = "Userprofile.html"
    }
}