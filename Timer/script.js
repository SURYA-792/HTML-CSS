let startBtn = document.getElementById("startBtn");
let flag = true;
function change(){
    console.log('hello');
    if(flag){
        startBtn.innerHTML = "Pasue";   
        flag = false;
    }
    else {
        startBtn.innerHTML  = "Start";
        flag = true;
    }
}