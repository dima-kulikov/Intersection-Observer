
const sections = document.querySelectorAll(".section");
const allLink = document.querySelectorAll(".nav__link");




const observer = new IntersectionObserver( (entries) => {
	entries.forEach((entry) => {
		if(entry.isIntersecting){
            allLink.forEach(link => {
                link.classList.remove('nav__active')
                const linkHref = link.getAttribute("href")
                console.log(linkHref)
                if(linkHref == entry.target.id){
                    alert('f')
                    link.classList.add('nav__active')
                }
            })
            console.log(entry.target.id)
        } 

	});
})


 

sections.forEach( section => {
    observer.observe( section );
})