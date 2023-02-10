
const sections = document.querySelectorAll(".section");
const allLink = document.querySelectorAll(".nav__link");
const menu = document.querySelector('.nav__list');


// функция обзервера, которая просматривает вхождение в блоки
const observer = new IntersectionObserver( (entries) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting){
            allLink.forEach(link => {
                link.classList.remove('nav__active')
                const linkHref = link.getAttribute("href").replace('#', '')
                if(linkHref == entry.target.id){
                    link.classList.add('nav__active')
                }
            })
        } 

	});
},{
    threshold: 0.7,
});
sections.forEach( section => {
    observer.observe( section );
})


// функция плавного скрола
menu.addEventListener('click', (e) => {
    if(e.target.classList.contains('nav__link')){
        e.preventDefault();
        
    const idElement = e.target.getAttribute('href').replace('#', '')

        window.scrollTo({
            top: document.getElementById(idElement).offsetTop,
            left: 0,
            behavior: 'smooth'
          })
    }
})

// функция анимации прогресс бара
function animationProgressBar(){
    // значение скрола от верха страницы
    // узнать высоту всего документа(вся страница)
    // узнать разницу высоты сайта и высоты экрана
    //задать процент прокрутки
    // задать стили прогресс бару
}
animationProgressBar()
 

