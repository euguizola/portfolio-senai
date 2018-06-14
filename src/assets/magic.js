// GSAP
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

window.addEventListener('load', ()=>{
    let t1;
    let t2;
    let timeLine1;
    document.querySelector('.app').addEventListener('mousedown', (e) => {
        t1 = TweenMax.to(".project", 1, {"min-width":"60%", width: "60%", "margin-right": "5px"})
        t2 = TweenMax.to(".thumb-mask", 1, {width: "80%", filter: "grayscale(100%)"})
        timeLine1 = new TimelineMax()
    })
    document.querySelector('.app').addEventListener('mouseup', (e) => {
        t1.reverse()
        t2.reverse()
    })
})