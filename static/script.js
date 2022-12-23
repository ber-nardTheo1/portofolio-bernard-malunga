const FirstUniversity = document.getElementById("first-school-name-el")
const introduction = document.getElementById("introduction-el")
const SecondUniversity = document.getElementById("second-school-name-el")
const secondIntroduction = document.getElementById("second-introduction")
const FirstWorkBackground = document.getElementById("first-company-name-el")
const SecondWorkBackground = document.getElementById("second-company-name-el")
const ThirdWorkBackground = document.getElementById("third-company-name-el")
const Work = ["Pasona Group", "Japan Marketing Expansion Competition Organization", "The Innovation Village"]




FirstUniversity.innerHTML="Nagoya University"

SecondUniversity.innerHTML="Kwansei Gakuin University"

FirstWorkBackground.innerHTML= Work[0]
SecondWorkBackground.innerHTML = Work[1]
ThirdWorkBackground.innerHTML= Work[2]

let ButtonResponse = document.getElementById("button-response") 
let Reply = document.getElementById("reply")

ButtonResponse.addEventListener("click", ()=>{
    let work = document.getElementById("work")
    let mentorship = document.getElementById("Mentorship")
    let CheckingWebsite = document.getElementById("checking-website")
     if(work.checked){
        Reply.innerHTML = `Contact me through email or <a href="https://www.linkedin.com/in/bernard-malunga-674760104/">Linkeldin</a>`
    } else if(mentorship.checked){
        Reply.innerHTML = `Current I am not available for mentorship.
                                <a href={% url 'post'%}>However you can check my articles here</a> `
    } else if (CheckingWebsite){
        Reply.innerHTML = `Thank you for checking my website`
    }
})

const toggleButton = getElementByClassName("toggle-button")[0]
const NavLinks = getElementByClassName("nav-Link")[0]

toggleButton.addEventListener("click", () => {
    NavLinks.classList.toggle("active")
})