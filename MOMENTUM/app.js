// login 시작
const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// const loginButton = loginForm.querySelector("button");
// const link = document.querySelector("a");

// function onLoginBtnClick(){
    // const username = loginInput.value;
    // console.log(username);
// }

function onLoginSubmit(event){
    //.preventDefault(); // 어떤 event default동작 발생하지 않게 함
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    //console.log(username);
    //greeting.innerText = "Hello " + username;
    // 변수안에 string이랑 같이 쓰는 법: 백틱 사용 
    paintGreetings(username);
}

// function handleLinkClick(event){
    // event.preventDefault();
    //console.dir(event);
    //alert("clicked!");
//}

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    // show the greetings
    paintGreetings(savedUsername);
}


//link.addEventListener("click", handleLinkClick);
//loginButton.addEventListener("click",onLoginBtnClick)