function loveper(){
    var name = document.getElementById('Name').value;
    var lname = document.getElementById('lstName').value;
    if(name == ""){
        alert('Please Enter Your Name ☺');
    }
    else if(name.length <=2){
        alert('please enter min 3 Words');
    }
    else if(!isNaN(name)){
        alert('Numbers are Not allowed 😕');
    }

    else if(lname == ""){
        alert('Please Enter Your Name ☺');
    }else if(lname.length <=2){
        alert('please enter min 3 Words');
    }
    else if(!isNaN(lname)){
        alert('Numbers are Not allowed 😕');
    }
    else{
        var lovedata = Math.random() *101;
        lovedata = Math.floor(lovedata);
        document.getElementById('score').value = lovedata + "%";
    }
}