
const submitBtn = document.getElementById("btn-submit");
const inputBox = document.querySelectorAll(".input-box");
const errorIcon = document.getElementById("icon-error")
const containerForm = document.getElementById("id-box-container")

const checkData = () => {
    const inputFirstName = document.getElementById("input-first-name");
    const inputLastName = document.getElementById("input-last-name");
    const inputEmail = document.getElementById("input-email");
    const inputPass = document.getElementById("input-password");  
    
    const firstNameValue = inputFirstName.value.trim();
    const lastNameValue = inputLastName.value.trim();
    const emailValue = inputEmail.value.trim();
    const passValue = inputPass.value.trim();

    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{2,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let bandera = true;
   
    if (firstNameValue === ""){
        inputBox[0].classList.add("error");
        inputBox[0].classList.add("errorIcon");
        bandera = false;
    }else {
        inputBox[0].classList.remove("error");
    }
    if (lastNameValue === ""){
        inputBox[1].classList.add("error");
        bandera = false;
    }else {
        inputBox[1].classList.remove("error");        
    }
    if (emailValue === ""){
        inputBox[2].classList.add("error");
        bandera = false;
    }else if (emailValue.match(regEx)){
        inputBox[2].classList.remove("error");
    }else {
        inputBox[2].classList.add("error");
        bandera = false;
    }
    if (passValue === ""){
        inputBox[3].classList.add("error");
        bandera = false;
    }else {
        inputBox[3].classList.remove("error");        
    }

    return bandera;
}


function saveLocalStorage() {   
    const emailsData = localStorage.getItem('userEmail');
    console.log(emailsData)
    const existingEmails = emailsData ? JSON.parse(emailsData) : [];
    const currentEmail = document.getElementById("input-email").value;

    const hasDuplicateEmail = existingEmails.includes(currentEmail);
    if (hasDuplicateEmail){
        alert(`This email ${currentEmail} is duplicate`, existingEmails);        
        return
    }
    alert('Your user have been save successfully')
    const newExistingEmails = [...existingEmails, currentEmail]
    localStorage.setItem('userEmail', JSON.stringify(newExistingEmails));  

}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (checkData()){
        saveLocalStorage();
        containerForm.reset();
    }
    
});

