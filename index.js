let resulttextbox=document.getElementById("resulttext")
function checkPalindrome(){
    resulttextbox.innerText="" 
    let userinp=document.getElementById("userinput").value;
    // replacing spaces and special characters with empty string
    updateduserinp=userinp.replace(/[^A-Z0-9]/ig,"")
    // reversing the input by converting it to array 
    let reverseofinp=updateduserinp.split("").reverse().join("");
    
    if(updateduserinp.toLowerCase()==reverseofinp.toLowerCase()){
        resulttextbox.innerText=`${userinp} Is A Palindrome` 
    }
    else{
        resulttextbox.innerText=`${userinp} Is Not A Palindrome`
    }
}