import {
    AnimationIntro
} from './AnimationIntro.js'

import { ScrollTouchLine } from './ScrollTouchLine.js';
import { SmoothScroll } from './SmoothScroll.js';

class App {
    constructor() {
        //intro의 animation
        this.animationintro = new AnimationIntro();
        this.animationintro.animate();

        //text에 window 닿을 때의 animation
        this.scrolltouchline = new ScrollTouchLine();

        //메뉴 선택시 스크롤 event 
        this.btn_room = document.querySelector('.btn_room');
        this.btn_room.addEventListener('click', function() {
            this.smoothscroll = new SmoothScroll('.intro--title', 1000)
        })

    }
}

window.onload = () => {
    new App();
}