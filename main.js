// document.getElementById("pass").addEventListener('input',(item) =>{
//     const input=document.getElementById("pass")
//     const phone=input.value
//     const hint=document.getElementById("hint")
//     const rgx=/^\d{4}[-. ]?\d{3}[-. ]?\d{4}$/g
//     const found=rgx.test(phone)

//     if (!found){
//         input.classList.add("invalid")
//         hint.classList.add("block")
//     }else{
//         input.classList.remove("invalid")
//         hint.classList.remove("block") 
//     }

// }
// )
// ----------------------------------------------------------------didn'w work
const input=document.getElementById("pass")

const hint=document.getElementById("hint")
const rgx=/^\d{4}[-. ]?\d{3}[-. ]?\d{4}$/g


input.addEventListener('input',(item) =>{

    // debugger
    const phone=input.value
    const found=rgx.test(phone)
    if (!found){
        input.classList.add("invalid")
        hint.classList.add("block")
    }else{
        input.classList.remove("invalid")
        hint.classList.remove("block") 
    }

}
)
// -------------------------------------------------------------------------------

// ---------------------------------------------------deletting (-. ) from number

document.getElementById("form").addEventListener('submit',(item) => {
    event.preventDefault()
    const input=document.getElementById("pass")
    const regex=/[()-. ]/g
    const savednum=input.value.replaceAll(regex,"")
    console.log(savednum);

})