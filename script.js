let passwordField1 = document.querySelector("#password");
let passwordField2 = document.querySelector("#confirmpassword");

passwordField1.addEventListener("change",()=>{
    passwordField2.pattern = `${passwordField1.value}`;
    check();
})


passwordField2.addEventListener("change",()=>{
     check();
})

function check(){
    if(passwordField1.value != "" && passwordField2.value != ""){
        if (passwordField1.value != passwordField2.value) {
            document.querySelector(".alert").hidden = false;
            
        }else{
            document.querySelector(".alert").hidden = true;

        }
    }
}