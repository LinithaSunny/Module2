function countdown(i){
    if (i<=20){
        document.write(i);
        i++;
        return(countdown(i))
    }
}
function count1(){
    var x = document.getElementById("number").value;
    countdown(x);
}
