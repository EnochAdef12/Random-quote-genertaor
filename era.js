
let quote = document.getElementById("quote")
let author = document.getElementById("author")
let btn = document.getElementById("btn")
let mouse = document.querySelector(".content")

const urlk ="https://api.quotable.io/random";

let getQuote = ()=>{
    fetch(urlk)
    .then((data)=> data.json())
    .then((item)=> {
        quote.innerText = item.content
        author.innerText= item.author
    })

}

window.addEventListener("load", getQuote)

mouse.addEventListener("mouseover",()=>{
    mouse.style.backgroundColor = "rgb(0, 132, 255)"
    quote.style.color = "white"
    author.style.color = "white"
    btn.style.backgroundColor = "white"
    btn.style.color = "blue"
}),
mouse.addEventListener("mouseleave", ()=>{
    mouse.style.backgroundColor = "white"
    quote.style.color = " rgb(0, 132, 255)"
    author.style.color = "black"
    btn.style.backgroundColor = "rgb(0, 132, 255)"
    btn.style.color = "white"

})

btn.addEventListener("click", getQuote),
btn.addEventListener("click", () => {
    quote.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    quote.style.color = " white"
    quote.style.fontSize = "19px"

    author.style.fontSize = "cursive"
    author.style.fontSize = "21"
    author.style.color = "white"


})