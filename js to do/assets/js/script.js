const addBtn = document.querySelector('.js-button');
const inpAdd = document.querySelector('.js-input');
const doList = document.querySelector('.container-js');
let check = document.querySelectorAll('.checkbox');
let todos = [];

function add(text) {
    const todo = {
        text,
        id:`${Math.random()}`,
        done: false
    }
    
 todos.push(todo);
}

function del() {
    todos.forEach(todo =>{
        if(document.querySelector('.checkbox').checked){
            todo.done = true;
        }
    });
}

function render() {
    let html = '';
    todos.forEach(todo =>{
        if (todo.done) {
            return;
        };

        html += `<div class="render-list">
                    <h1>${todo.text}</h1>
                    <input class="checkbox" data-id="${todo.id}" type="checkbox">
                </div>
        `
    });
    doList.innerHTML = html;
    check = document.querySelectorAll('.checkbox');
    check.forEach(item =>{
        item.addEventListener('click', (event)=>{
            console.log('id');
            const  id = event.target.dataset.id;
            console.log(id);
            del(id);
            render();
            
        });
    });
};

// check.forEach(item =>{
//     item.addEventListener('click', (event)=>{
//         const id = event.target.id;
//         del(id);
//         render();
//         console.log(id);
//     });
// });

// doList.addEventListener('click',(event)=>{
//     if (event.target.className != 'checkbox') {
//         return;
//     }
//     const  id = event.target.dataset.id;
//     del(id);
//     render();
// });

addBtn.addEventListener('click', ()=>{
    const text = inpAdd.value;
    add(text);
    render();
});

// function dele() {
//     todos.forEach(todo =>{
//         if(check.checked) {
//             todo.done = true;
//         }
//     });
// }

// const btnAllDel = document.querySelector('.wewewe');
//     btnAllDel.addEventListener('click', ()=>{
//         let allEl = document.querySelectorAll('.render-list');
//     })


// let todos = [];

// function addToList(text) {
//     const todo = {
//         text,
//         done: false,
//         id: `${Math.random()}`
//     }

//     todos.push(todo);
// }

// function removeDo(id) {
//     todos.forEach(todo =>{
//         if (todo.id === id) {
//             todo.done = true;
//         }
//     });
// }

// addBtn.addEventListener('click',() =>{
//     const text = inpAdd.value;

//     addToList(text);
//     render();
// });


// function render() {
//     console.log(todos);

//     let html = '';
    
//     todos.forEach(todo => {
//         if(todo.done) {
//             return;
//         };

//         html += `
//             <div class="render-list">
//                 <h1>${todo.text}</h1>
//                 <input  class="inp-ren" type='checkbox'>
//                 <button data-id='${todo.id}'>Ебанул</button>
//             </div>
            
//         `;
//     });
    
//     doList.innerHTML = html;

// }

// doList.addEventListener('click', (event) =>{
//     if (event.target.tagName !== 'BUTTON') {
//         return;
//     }

//     const id = event.target.dataset.id;

//     removeDo(id);
//     render();

// });


// render();


