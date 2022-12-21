const LeftNavLink = document.getElementsById('left-nav-bar')
const ToggleButton = document.getElementById('toggle-button')

ToggleButton.addEventListener('click', () =>{
    LeftNavLink.ClassList.toggle('active')

})