const target = document.querySelectorAll('[data-slide]');
const animationClass = 'animation';
// debounce
const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

function animationScroll(){
    const windowTop = window.scrollY + window.innerHeight*.80;
    target.forEach(function(e){
        // console.log(e)
        if(windowTop > e.offsetTop){
            e.classList.add(animationClass)
        }else if (windowTop < e.offsetTop){
            e.classList.remove(animationClass)
        }
    })
}
    window.addEventListener('scroll', debounce(function(){
        animationScroll()},50)
)