export class Slider {
    constructor() {
        this.slide = document.querySelectorAll('.slide');
        this.prev = document.querySelector('.prev');
        this.next = document.querySelector('.next');
        this.indicator = document.querySelectorAll('.indicator');
        this.index = 0;


        //화살표
        this.prev.addEventListener('click',
            this.prevSlide.bind(this)
        )
        this.prev.addEventListener('click',
            this.updateIndicator.bind(this)
        )

        this.next.addEventListener('click',
            this.nextSlide.bind(this)
        )
        this.next.addEventListener('click',
            this.updateIndicator.bind(this)
        )

        //timer
        this.timer = setInterval(this.autoPlay.bind(this), 4000);


    }

    resetTimer() {
        clearInterval(this.timer);
        this.timer = setInterval(this.autoPlay.bind(this), 5000);
    }

    autoPlay() {
        this.nextSlide();
        this.updateIndicator();
    }

    updateIndicator() {
        for (let i = 0; i < this.indicator.length; i++) {
            this.indicator[i].classList.remove('active');
        }

        this.indicator[this.index].classList.add('active');
    }

    prevSlide() {
        if (this.index == 0) {
            this.index = this.slide.length - 1;
        } else {
            this.index--;
        }


        this.changeSlide();
        this.resetTimer.bind(this);
    }

    nextSlide() {
        if (this.index == this.slide.length - 1) {
            this.index = 0;
        } else {
            this.index++;
        }


        this.changeSlide();
        this.resetTimer(this.timer);
    }

    changeSlide() {
        for (let i = 0; i < this.slide.length; i++) {
            this.slide[i].classList.remove('active');
        }

        this.slide[this.index].classList.add('active');
    }
}