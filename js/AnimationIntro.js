export class AnimationIntro {
    constructor() {
        this.house = document.querySelector('.house');
        this.logo = document.querySelector('#logo');
        this.headline = document.querySelector('.headline');
        this.slider = document.querySelector('.slider');
        this.tl = new TimelineMax();
    }

    animate() {


        this.tl.fromTo(
                this.house,
                1.2, {
                    height: "0%"
                }, {
                    height: "100%",
                    ease: Power2.easeInOut
                })
            .fromTo(this.house,
                1.4, {
                    width: "80%"
                }, {
                    width: "100%",
                    ease: Power2.easeInOut
                })
            .fromTo(this.slider, 1.4, {
                x: "-100%"
            }, {
                x: "0%",
                ease: Power2.easeInOut
            }, "-=1.4")
            .fromTo(this.logo, 0.5, {
                opacity: 0,
                x: 30
            }, {
                opacity: 1,
                x: 0
            }, "-=0.5");
    }


}