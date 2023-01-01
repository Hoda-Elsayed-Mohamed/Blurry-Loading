const countDown = document.querySelector('h1')
function blury(){
 var loadTime =0;
        setInterval(() => {
            if(loadTime > -100){

                loadTime --;
                let positiveValue = loadTime * -1;
                countDown.innerHTML = positiveValue +'%';

                let blurValue = 30 -(loadTime*(-30/100));
                let opacityValue = 1 -(loadTime*(-10/1000));

                document.querySelector('body').style.backdropFilter =`blur(${blurValue}px)`;
                setTimeout(() => {
                    countDown.style.opacity = `${opacityValue}`;
                }, 1000);
            } 
        }, 30);
     
}

window.addEventListener('load', blury);