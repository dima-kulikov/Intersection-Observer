
const sections = document.querySelectorAll(".section");
const allLink = document.querySelectorAll(".nav__link");
const menu = document.querySelector('.nav__list');
const progressBar = document.querySelector(".progress__bar");
const allSection = document.querySelectorAll('.section');
const hello = document.querySelector('.hello')
const helloAll = document.querySelectorAll('.hello');


helloAll.forEach( hello => {
    hello.style.top = Math.floor(Math.random() * 100) + 1 + "%";
    hello.style.left = Math.floor(Math.random() * 100) + 1 + "%";
})


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
//навешиваю анимацию на секцию
            allSection.forEach(link => {
                link.childNodes[1].classList.remove('hello')
                
                

                if(link.id === entry.target.id){
                    link.childNodes[1].style.top = "50%"
                    link.childNodes[1].style.left = "50%"  
                    link.childNodes[1].classList.add('hello')
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
    const scrollPageHeight = document.documentElement.scrollTop;
    // узнать высоту всего документа(вся страница)
    const pageHeight = document.documentElement.scrollHeight
    //высота экрана пользователя
    const screenHeight = document.documentElement.clientHeight;
    // узнать разницу высоты сайта и высоты экрана
    const heightDifference = pageHeight - screenHeight;
    // процент прокрутки
    const scrollPercent = (scrollPageHeight / heightDifference) * 100;
    // задать стили прогресс бару
    progressBar.style.width = scrollPercent + '%'
}
window.addEventListener("scroll", animationProgressBar)

// console.log(screenHeight)

