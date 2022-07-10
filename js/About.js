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