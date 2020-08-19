const house = document.querySelector('.house');
const logo = document.querySelector('#logo');
const headline = document.querySelector('.headline');
const slider = document.querySelector('.slider');

const tl = new TimelineMax();

tl.fromTo(
        house,
        1.2, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
    .fromTo(house,
        1.4, { width: "80%" }, { width: "100%", ease: Power2.easeInOut })
    .fromTo(slider, 1.4, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut }, "-=1.4")
    .fromTo(logo, 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 }, "-=0.5");


function scrollAppear() {
    let introText = document.querySelectorAll('.intro--text');

    let screenPosition = window.innerHeight;

    for (let i = 0; i < introText.length; i++) {
        let introPosition = introText[i].getBoundingClientRect().top;

        if (introPosition < screenPosition) {
            introText[i].classList.add('intro--text--appear');
        }
    }

}


window.addEventListener('scroll', scrollAppear);