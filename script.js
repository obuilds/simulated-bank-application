const btn = document.getElementById('test-btn')
btn.addEventListener('click', ()=>{
const a = document.getElementById('aler')
a.classList.remove('display')

setTimeout(show, 3000);
})
const btn2 = document.getElementById('test2')


btn2.addEventListener('click', ()=>{
    clearTimeout(show)
})
function show(){
    const a = document.getElementById('aler')

    if(!a.classList.contains('display')){
        a.classList.add('display')
    }
    console.log('work')
}
// clearTimeout(show, 1000)

