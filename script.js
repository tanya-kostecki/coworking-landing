const toggleEl = document.querySelector('.header__toggle')
const headerMenu = document.querySelector('.header__menu')
const headerClose = document.querySelector('.header__close')

// Toggle responsive menu
toggleEl.addEventListener('click', () => {
    headerMenu.classList.add('show__menu')
})

headerClose.addEventListener('click', () => {
    headerMenu.classList.remove('show__menu')
})

// Section navigation
const menuLinks = document.querySelectorAll('.menu-link')

const linkAction = () => {
    headerMenu.classList.remove('show__menu')
}

menuLinks.forEach((menuLink) => menuLink.addEventListener('click', linkAction))

//Active section link
const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 358,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.header__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active__link')
		}else{
			sectionsClass.classList.remove('active__link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)

//Show scroll up 
const scrollUp = document.querySelector('.scroll-up')

const showScroll = () => {
	if (this.scrollY >= 350) {
		scrollUp.classList.add('show__scroll')
	} else {
		scrollUp.classList.remove('show__scroll')
	}
}
window.addEventListener('scroll', showScroll)