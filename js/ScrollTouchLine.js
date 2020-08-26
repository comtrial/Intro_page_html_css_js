export class ScrollTouchLine {
    constructor() {
        this.introText = document.querySelectorAll('.intro--text');
        this.screenPosition = window.innerHeight;

        window.addEventListener('scroll', this.scrollAppear.bind(this));
    }

    scrollAppear() {
        for (let i = 0; i < this.introText.length; i++) {
            let introPosition = this.introText[i].getBoundingClientRect().top;

            if (introPosition < this.screenPosition) {
                this.introText[i].classList.add('intro--text--appear');
            }
        }

    }
}