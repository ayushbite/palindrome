

function check(){
    let pinput = document.getElementById("inp").value.toLowerCase();
let pres = document.getElementById("inpres");
let reverse_value = pinput.split("").reverse().join("");
if(pinput == ""){
    alert("enter the word");
}
else if(pinput === reverse_value){
    pres.style.display = "block";
    pres.innerText = `${pinput} is a palindrome`
}
else{
    pres.style.display = "block";
    pres.innerText = `${pinput} is not a palindrome`
}

}