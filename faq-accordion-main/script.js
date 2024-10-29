const divEls = document.querySelectorAll("div.qa-div > div")
const divContainerEls = document.querySelectorAll("div.qa-div")


function clickHandler(index){
    divContainerEls[index].classList.toggle("active")
}


divEls.forEach((divEl,index)=>{
    divEl.addEventListener("click",() =>clickHandler(index))
})


// divEls.forEach((divEl,index)=>{
//     divEl.addEventListener("click",()=>{
//         divContainerEls[index].classList.toggle("active")
//     })
// })


// divEls[0].addEventListener("click",() =>clickHandler(0))
// divEls[1].addEventListener("click",() =>clickHandler(1))
// divEls[2].addEventListener("click",() =>clickHandler(2))
// divEls[3].addEventListener("click",() =>clickHandler(3))