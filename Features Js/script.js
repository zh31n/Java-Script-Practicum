                                // Accordion

let accors = document.querySelectorAll('.accordion').forEach( (el) => {
    el.addEventListener('click',() =>{
        let content = el.nextElementSibling;
        console.log(content);

        if(content.style.maxHeight){
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
        } else {
            document.querySelectorAll('.content').forEach((el) => el.style.maxHeight = null)
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    })
})

                                // Modal Window

let modal = document.querySelector('.modal');
let btn = document.querySelector('.modal-btn');
let span = document.querySelector('.close');

btn.addEventListener('click', ()=>{
    modal.style.display = 'block';
});

span.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

window.addEventListener('click', (event)=>{
    if(event.target == modal) {
        modal.style.display = 'none';
    }
});

                                // tabs

// const tabsBtn = document.querySelectorAll('.tabs-nav-btn');
// const tabsItems = document.querySelectorAll('.tabs-item'); 

// tabsBtn.forEach(function(item){
//     item.addEventListener('click', function(){
//         let currentBtn = item;
//         let tabId = currentBtn.getAttribute('data-tab');
//         let currentTab = document.querySelector(tabId);

//         if( ! currentBtn.classList.contains('active') ){
//             tabsBtn.forEach(function(item){
//                 item.classList.remove('active')
//             });
    
//             tabsItems.forEach(function(item){
//                 item.classList.remove('active')
//             });
    
    
//             currentBtn.classList.add('active');
//             currentTab.classList.add('active');
//         }
//     });
// });

// document.querySelector('.tabs-nav-btn').click();

const tabsBtn = document.querySelectorAll('.tabs-nav-btn');
const tabsItems = document.querySelectorAll('.tabs-item');

tabsBtn.forEach(function(item){
    item.addEventListener('click', function(){
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if ( !currentBtn.classList.contains('active')){
            tabsBtn.forEach(function(item){
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function(item){
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        }
    });
});

document.querySelector('.tabs-nav-btn').click();

                        // Clock

let clock = document.querySelector('.clock');
function time(){
    let date = new Date();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minuts = date.getMinutes()  < 10 ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = date.getSeconds()  < 10 ? '0' + date.getSeconds() : date.getSeconds();

    
    clock.innerHTML = `${hours} : ${minuts} : ${seconds}`
}

setInterval(time, 1);

