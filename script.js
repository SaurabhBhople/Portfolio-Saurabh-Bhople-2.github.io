var typed = new Typed(".multiple-text", {
    strings: ["Untrained","Unexperienced"],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true

});

const btn = document.querySelector('.btn1')
const rts = document.querySelector('.rate-section')
const items = document.querySelectorAll('.item')
const submit = document.querySelector('.submit')
const successPopup = document.querySelector('.success-popup')
const closebtn = document.querySelectorAll('.close')

btn.addEventListener('click', ()=>{
    if(rts.className === "rate-section"){
        rts.classList.add('rate-section-slide')
    }
    else{
        rts.classList.remove('rate-section-slide')
    }
});

items.forEach(item=>{
    item.addEventListener('click', ()=>{
        items.forEach(item=>{
            item.classList.remove('active')
        })
        item.classList.add('active')
    })
});

submit.addEventListener('click', ()=>{
        successPopup.classList.add('success-popup-slide')
});

closebtn.forEach(item=>{
    item.addEventListener('click',()=>{
        closebtn.forEach(item=>{
            successPopup.classList.remove('success-popup-slide')
            rts.classList.remove('rate-section-slide')
        })
    })
});