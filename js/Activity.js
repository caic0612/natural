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