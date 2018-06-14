// GSAP
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

window.addEventListener('load', ()=>{
    let t1;
    let t2;
    let t3;
    let t4;
    let timeLine1;
    document.querySelector('.app').addEventListener('mousedown', (e) => {
        t1 = TweenMax.to(".project", 1, {"min-width":"60%", width: "60%", "margin-right": "5px"})
        t2 = TweenMax.to(".thumb-mask", 1, {width: "80%", filter: "grayscale(100%) brightness(1.1)"})
        t3 = TweenMax.to(".thumb", 1, {"opacity": 0.3})
        t4 = TweenMax.to(".identity", 2, {opacity: 1})
        timeLine1 = new TimelineMax()
    })
    document.querySelector('.app').addEventListener('mouseup', (e) => {
        t1.reverse()
        t2.reverse()
        t3.reverse()
        t4.reverse()
    })
})