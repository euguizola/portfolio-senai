// GSAP
import TweenMax from 'gsap/src/uncompressed/TweenMax';
import TimelineMax from 'gsap/src/uncompressed/TimelineMax';
import { Back } from 'gsap';

var translate = 0
var projectQuantity = 0
var totalWidth = 0
var projectWidth = 0

window.addEventListener('load', ()=>{
    let t1
    let t2
    let t3
    let t4
    let t5
    let t6
    let bottom
    let timeLine1

    document.querySelector('.app').addEventListener('mousedown', (e) => {
        document.querySelector('.app').addEventListener('mousemove', horizontalNavigation)

        t1 = TweenMax.to(".project", 0.5, {"min-width":"70%", width: "70%", "margin-right": "5px"})
        t2 = TweenMax.to(".thumb-mask", 0.3, {width: "80%", filter: "grayscale(100%) brightness(1.2)", "box-shadow":"4px 4px 6px rgba(0,0,0,0.06), -4px -4px 6px rgba(0,0,0,0.06)"})
        t3 = TweenMax.to(".thumb", 0.5, {"opacity": 0.3})
        t4 = TweenMax.to(".identity", 0.5, {opacity: 1})
        t5 = TweenMax.to(".identity h1", 0.8, {"transform":"translateX(0)"})
        t6 = TweenMax.to(".identity h2", 0.8, {"transform":"translateY(0)"})
        bottom = TweenMax.to(".bottom", 0.3, {opacity: 0})
        
        timeLine1 = new TimelineMax()
    })

    document.querySelector('.app').addEventListener('mouseup', (e) => {
        document.querySelector('.app').removeEventListener("mousemove", horizontalNavigation)
        if( ((translate * -1) % projectQuantity) !== 0 ){
        }
        t1.reverse()
        t2.reverse()
        t3.reverse()
        t4.reverse()
        t5.reverse()
        t6.reverse()
        bottom.reverse()
    })

    function horizontalNavigation(e) {
        totalWidth = 0
        projectQuantity = 0
        document.querySelectorAll('.project').forEach(project => {
            projectWidth = project.clientWidth
            totalWidth += project.clientWidth
            projectQuantity++
        })
        let nextTranslate = translate + e.movementX
        if(nextTranslate > ((totalWidth * -1) + projectWidth) && nextTranslate < 0){
            translate = nextTranslate
        }
        // translate += (e.movementX * quantity)
        document.querySelector('#projects').style.transform = "translateX("+(translate)+"px)"
    }

})