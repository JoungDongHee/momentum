const loginForm = document.querySelector("#Login-form")
const loginInput = document.querySelector("#Login-form input");
const h1Tag = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "userName"




function loginSubmit(event){
    event.preventDefault();
    const userName = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,userName);
    painGreeting(userName);
}

function painGreeting(userName){
    h1Tag.classList.remove(HIDDEN_CLASSNAME);
    h1Tag.innerText = `Hello~ ${userName}`; 
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",loginSubmit);
}else{
    painGreeting(saveUsername);
}