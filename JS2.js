let arabic= document.getElementById("arabic");
let english= document.getElementById("english");
let title= document.getElementById("title");
let welcome= document.getElementById("welcome");
let about= document.getElementById("about");
let aboutText= document.getElementById("aboutText");
let contact= document.getElementById("contact");

arabic.onclick = ()=>{
    setLang("arabic");
    localStorage.setItem("Lang","arabic");
};

english.onclick = ()=>{
    setLang("english");
    localStorage.setItem("Lang","english");
};

onload = ()=>{
    setLang(localStorage.getItem("Lang"));
};

function setLang(getLang){
    if(getLang === "arabic"){
        title.innerHTML = "جافا سكربت";
        welcome.innerHTML = "مرحبا بكم في موقع تعلم لغة جافا سكربت";
        about.innerHTML = "حولنا";
        aboutText.innerHTML="موقع تعلم لغة جافا سكربت";
        contact.innerHTML = "اتصل بنا";
    }
    else if (getLang === "english"){
        title.innerHTML="Learn java sk";
        welcome.innerHTML = "welcome to website of learn Java SK Language";
        about.innerHTML = "about us";
        aboutText.innerHTML="website of Java SK Language";
        contact.innerHTML = "contact us";
    }
}
document.getElementById("t").addEventListener("click",()=>{
    alert("تم تنفيذ الامر");
})

function onbeforload(){
    return "هل تريد فعلا الذهاب الى هذا الموقع " ;
}

let email_form = document.getElementById("email_form");
email_form.addEventListener("submit", (error)=>{
    let email = document.getElementById("email");
    if (email.value.indexOf("@gmail") != -1 ){
        return true;
    }else{
        email.style.borderColor = "red";
        document.getElementById("email_error").innerHTML= "ايميل غير صالح , قم بوضع ايميل من نوع جيميل";
        error.preventDefault();
    }
});