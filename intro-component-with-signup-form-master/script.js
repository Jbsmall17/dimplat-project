const inputEls = document.querySelectorAll('input') 
const btnEl = document.querySelector('button')
const divEls = document.querySelectorAll('form > div')
const iEls = document.querySelectorAll('i.error')



btnEl.addEventListener('click',(e)=>{
    e.preventDefault()
    inputEls.forEach((input,index)=>{
        if(index != 2){
            if(input.value == ""){
                divEls[index].classList.add("div-error")
                // divEls[0].classList.toggle("bs")
                iEls[index].classList.add("active")
            }else{
                divEls[index].classList.remove("div-error")
                iEls[index].classList.remove("active")
            }
        }else{
            const emailTestPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            const isEmailValid = emailTestPattern.test(input.value)
            if(!isEmailValid){
                divEls[index].classList.add("div-error")
                iEls[index].classList.add("active")
            }else{
                divEls[index].classList.remove("div-error")
                iEls[index].classList.remove("active")
            }
        }
    })
})