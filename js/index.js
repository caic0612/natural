// 头部
window.addEventListener('scroll',function(){
    let header = document.querySelector('.container')
    header.classList.toggle("sticky",window.scrollY > 0)
})
let labels = document.querySelectorAll('.label');
labels.forEach(function(item){
    item.onclick = function(){         
        labels.forEach(function(temp){
            temp.classList.remove("change")
        })
        item.classList.add("change");  
    }
})
// 轮播图
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const slides = document.querySelectorAll(
".slide"
);

let currentIndex = 0;

let autoPlay = true;

let forward = true;

let interval = 5000;

next.addEventListener("click", handleNextClicked);
prev.addEventListener("click", handlePrevClicked);

if (autoPlay) {
setInterval(
    forward
    ? handleNextClicked
    : handlePrevClicked,
    interval
);
}

function handleNextClicked() {
let current = slides[currentIndex];
current.classList.remove("current");

currentIndex++;
if (currentIndex >= slides.length) {
    currentIndex = 0;
}

slides[currentIndex].classList.add("current");
}

function handlePrevClicked() {
let current = slides[currentIndex];
current.classList.remove("current");

currentIndex--;
if (currentIndex < 0) {
    currentIndex = slides.length - 1;
}
slides[currentIndex].classList.add("current");
}
// 图片过滤
$(document).ready(function(){
    $('.list').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'all'){
            $('.itemBox').show('1000');
        }
        else{
            $('.itemBox').not('.'+value).hide('1000');
            $('.itemBox').filter('.'+value).show('1000');
        }
    });
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    });
});