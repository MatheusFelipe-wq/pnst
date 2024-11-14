let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section')

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop;
        let heightSection = section.offsetHeight;
        let idSection = section.getAttribute('id')
        
        if(top >= offset && top < offset + heightSection) {
            links.forEach(link => {
                link.classList.remove('actived')

                document.querySelector(`header nav a[href*='${idSection}']`).classList.add('actived')
            })
        }
        
    })    
})
