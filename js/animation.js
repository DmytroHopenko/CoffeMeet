document.addEventListener('reload', () => {
    document.scrollTo('0');
});

const timeLine = gsap.timeline({defaults :{duration: 0.7}});
const timeLine2 = gsap.timeline({defaults :{duration: 1}});

timeLine
    .from('.direct_line', {y: -120})
    .from('.direct_line .language p', {opacity: 0, stagger: .3 ,duration: .3})
    .from('.direct_line > p', {opacity: 0, duration: .3})
    .from('.navigation', {y: 90, opacity: 0})
    .from('.navigation nav ul li a', {opacity: 0, stagger: .3})
    .from('.navigation .logo_wrap img', {opacity: 0})
    .from('.navigation .icons_wrap a', {opacity: 0, stagger: .3})

timeLine2
    .from('.hero_wrap', {opacity: 0})
    .from('.hero_information h1', {x: '-100%',opacity: 0, duration: .8})
    .from('.hero_information p', {x: '-100%',opacity: 0 , duration: .8})
    .from('.hero_information .button_wrap a', {y: '100%', opacity: 0 , stagger: .5, duration: .8})

gsap.registerPlugin('ScrollTrigger');

gsap.from('.intro', {
    scrollTrigger: {
        trigger: '.intro',
        start: '100 80%',
        end: '200, 60%',
        toggleActions: 'play none none none'
    },
    y: '100%',
    opacity: 0,
    scale: 1.5,
    duration: 1
})
gsap.from('.catalog_wrap h1', {
    scrollTrigger: {
        trigger: '.catalog_wrap',
        toggleActions: 'play none none none'
    },
    x: '-100%',
    opacity: 0,
    duration: 1
})

gsap.from('.catalog .element', {
    scrollTrigger: {
        trigger: '.catalog',
        toggleActions: 'play none none none'
    },
    y: '100%',
    opacity: 0,
    stagger: .3,
    duration: 1
})
gsap.from('.news_wrap h1', {
    scrollTrigger: {
        trigger: '.news_wrap',
        toggleActions: 'play none none none'
    },
    x: '-100%',
    opacity: 0,
    duration: 1
})
gsap.from('.news .element', {
    scrollTrigger: {
        trigger: '.news',
        toggleActions: 'play none none none'
    },
    y: '100%',
    opacity: 0,
    stagger: .3,
    duration: 1
})