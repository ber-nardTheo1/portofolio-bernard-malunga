const EducationBackground = document.querySelectorAll("#education-background")
const FirstUniversity = document.getElementById("first-school-name-el")
const introduction = document.getElementById("introduction-el")
const SecondUniversity = document.getElementById("second-school-name-el")
const secondIntroduction = document.getElementById("second-introduction")
const WorkExperience = document.getElementById("#work-experience-el")
const FirstWorkBackground = document.getElementById("first-company-name-el")
const SecondWorkBackground = document.getElementById("second-company-name-el")
const ThirdWorkBackground = document.getElementById("third-company-name-el")
const Work = ["Pasona Group", "Japan Marketing Expansion Competition Organization", "The Innovation Village"]




FirstUniversity.textContent="Nagoya University"

SecondUniversity.textContent="Kwansei Gakuin University"

FirstWorkBackground.textContent = Work[0]
SecondWorkBackground.textContent = Work[1]
ThirdWorkBackground.textContent = Work[2]

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

const toggleButton = getElementById("toggle-button")[0]
const NavLinks = getElementById("nav-Link")[0]

toggleButton.addEventListener("click", () => {
    NavLinks.ClassList.toggle("active")
})