// const title = document.getElementById("something");
// title.innerText= "Got you!";
// console.log(title.className);

const h1 = document.querySelector(".hello:first-child h1");

//console.log(title);
// 어떤 이벤트가 있는지 확인가능 dir
// console.dir(h1);

//title.innerText = "Hello";

// event를 listen하는 법
// function handleTitleClick(){
    // const clickedClass = "clicked";
    // if(h1.classList.contains(clickedClass)){
        // h1.classList.remove(clickedClass);
    // }else{
        // h1.classList.add(clickedClass);
    // }
// }
// 
// h1.onclick = handleTitleClick;

function handleTitleClick(){
    h1.classList.toggle("clicked"); //위의 코드를 간단히 정리 remove,add를 할 수 있음
}

h1.onclick = handleTitleClick;

// function handleMouseEnter(){
    // h1.innerText = "Mouse is here!";
// }
// 
// function handleMouseLeave(){
    // h1.innerText = "Mouse is gone!";
// }
// 
// function handleWindowResize(){
    // document.body.style.backgroundColor = "tomato";
// }
// 
// function handleWindowCopy(){
    // alert("copier!");
// }
// 
// function handleWindowOffline(){
    // alert("SOS no wifi");
// }
// 
// function handleWindowONline(){
    // alert("ALL GOOD!");
// }

// 어떤 이벤트 listen 설정
//title.addEventListener("click", handleTitleClick);
// 마우스를 올리면
//h1.onmouseenter = handleMouseEnter;
//title.addEventListener("mouseenter", handleMouseEnter);
// 마우스가 떠나면 
//h1.addEventListener("mouseleave", handleMouseLeave);

// 윈도우 크기를 조정하면
// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy); //누가 copy하려 하면
// window.addEventListener("offline", handleWindowOffline); //WIFI가 해제되면
// window.addEventListener("online", handleWindowONline); // WIFI가 다시 연결되면
