function change(){
    let value = "0123456789ABCDEF";
    let hex = "#";
    for ( let i = 0; i < 6; i++){
        hex = hex + value[Math.floor(Math.random() * 16)]
    }
    return hex;
}
function changer() {
    document.body.style.backgroundColor = change()
}
