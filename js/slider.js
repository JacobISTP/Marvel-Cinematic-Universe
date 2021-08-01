const panel_main = document.querySelector("body>div.order");
const order_launch = document.querySelector("#order_launch");
const order_time = document.querySelector("#order_time");
let startX, endX;
let position = 0;

let mobileJs = window.matchMedia('(max-width: 420px)');
let pcJs = window.matchMedia('(min-width: 421px)')
    function prev(){
        if(position == 0 && mobileJs.matches == true){
                
                order_launch.style.transform = `translateX(-100%)`;
                order_time.style.transform = `translateX(0)`;
                position += 1;
        }
    }
    function next(){
        if(position == 1 && mobileJs.matches == true){
                order_launch.style.transform = `translateX(0)`;
                order_time.style.transform = `translateX(100%)`;
                position -= 1;
        }
    }


    function touchStart(event){
        startX = event.touches[0].pageX;
    }
    function touchEnd(event){
        endX = event.changedTouches[0].pageX;
        if(startX - endX > 50){
            prev();
        } else if(startX - endX < -50){
            next();
        }
    }

    function resizeWidth(){
        if(pcJs.matches == true){
            order_launch.style.transform = `translateX(0)`;
            order_time.style.transform = `translateX(0)`;
        } else{
            order_launch.style.transform = `translateX(0)`;
            order_time.style.transform = `translateX(100%)`;
            position = 0;
        }
    }

    window.addEventListener("resize", resizeWidth)
    order_launch.addEventListener("touchstart", touchStart);
    order_launch.addEventListener("touchend", touchEnd);
    order_time.addEventListener("touchstart", touchStart);
    order_time.addEventListener("touchend", touchEnd);