import {
    AnimationIntro
} from './AnimationIntro.js'

import { ScrollTouchLine } from './ScrollTouchLine.js';
import { SmoothScroll } from './SmoothScroll.js';
import { Slider } from './Slider.js';


class App {
    constructor() {
        //intro의 animation
        this.animationintro = new AnimationIntro();
        this.animationintro.animate();

        // //text에 window 닿을 때의 animation
        // this.scrolltouchline = new ScrollTouchLine();

        //메뉴 선택시 스크롤 event 
        this.btn_introduce = document.querySelector('.btn_introduce');
        this.btn_introduce.addEventListener('click', function() {
            this.smoothscroll = new SmoothScroll('.introduce--title', 1000)
        })

        this.btn_room = document.querySelector('.btn_room');
        this.btn_room.addEventListener('click', function() {
            this.smoothscroll = new SmoothScroll('section.intro', 1000)
        })

        this.slide = new Slider();

    }
}

window.onload = () => {
    new App();
}