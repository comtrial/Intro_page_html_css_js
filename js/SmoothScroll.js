export class SmoothScroll {
    constructor(target, duration) {
        this.target = document.querySelector(target);
        this.targetPosition = this.target.getBoundingClientRect().top;
        this.startPosition = window.pageYOffset;
        this.distance = this.targetPosition - this.startPosition;
        this.startTime = null;
        this.duration = duration;
        requestAnimationFrame(this.animationScroll.bind(this));
    }

    animationScroll(currentTime) {
        if (this.startTime === null) this.startTime = currentTime;

        let timeElapsed = currentTime - this.startTime;
        let run = this.ease(timeElapsed, this.startPosition, this.distance, this.duration)

        window.scrollTo(0, run);
        if (timeElapsed < this.duration) requestAnimationFrame(this.animationScroll.bind(this));
    }

    ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }


}