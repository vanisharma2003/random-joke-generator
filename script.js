const URL="https://official-joke-api.appspot.com/random_joke"
const btn=document.getElementById('btn')
btn.addEventListener("click",()=>{
    fetch(URL)
    .then((res)=>{
        if(!res.ok){
            throw new Error(`HTTP Error : ${res.code}`)//proper error handling .......
        }
        return res.json()
    })
    .then((data)=>{
        document.getElementById("setup").innerHTML=`${data.setup}`
        document.getElementById("punchline").innerHTML=`${data.punchline}`
    })
    .catch((error)=>{
        document.getElementById("setup").innerHTML="Failed to load joke"
        document.getElementById("punchline").innerHTML=""
    })
})
