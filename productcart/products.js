var arr = [
    { name:"LAXMO WRIST WATCH",dp:"https://images.unsplash.com/photo-1434056886845-dac89ffe9b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", pricing: "Rs. 950/-", addtocart: true},
    { name:"GLORY RINGS",dp:"https://images.unsplash.com/photo-1622398925373-3f91b1e275f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80", pricing: "Rs. 199/-", addtocart: true},
    { name:"LEATHER CASE",dp:"https://images.unsplash.com/photo-1628489481436-e8cb20576a9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80", pricing: "Rs. 459/-", addtocart: true},
    { name:"REGMA SUNGLASS",dp:"https://images.unsplash.com/photo-1590564310418-66304f55a2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80", pricing: "Rs. 399/-", addtocart: true},
    { name:"JWELLES NECKLACES",dp:"https://images.unsplash.com/photo-1599643477877-530eb83abc8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80", pricing: "Rs. 849/-", addtocart: true},
    { name:"CONVERSE SHOES",dp:"https://images.unsplash.com/photo-1607522370275-f14206abe5d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=821&q=80", pricing: "Rs. 1299/-", addtocart: true},
    { name:"CTRL PROTIEN SHAKER",dp:"https://images.unsplash.com/photo-1595348020949-87cdfbb44174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=formatcrop&w=1170&q=80", pricing: "Rs. 249/-", addtocart: true},
    { name:"DUMBBELLS",dp:"https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80", pricing: "Rs. 699/-", addtocart: true}
]

var arr2 = []

function showcards( val){
     var clutter = "";

     val.forEach(function(elem,index){
         clutter += `<div class="prdcard">
         <div class="left">
             <img src="${elem.dp}" alt="">
         </div>
         <div class="right">
             <h1>${elem.name}</h1>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate maxime praesentium inventore reprehenderit a qui odio impedit labore autem! Dolor incidunt debitis reiciendis laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, rem.</p>
             <h3>${elem.pricing}</h3>
             <button id = "${index}">${elem.addtocart?"Buy Now":"Added"}</button>
         </div>
        
     </div>`
     });

     document.querySelector("#products").innerHTML = clutter;
}

// showcards(arr)

document.querySelector("#products").addEventListener("click", function(dets){
         arr[dets.target.id].addtocart = !arr[dets.target.id].addtocart; 
     showcards(arr)


if(arr2.indexOf(dets.target.id) === -1){
    arr2.push(dets.target.id);
}

var carttempt = ' ';

if(arr2){
    arr2.forEach(function(val,i){
        carttempt += `<div class="template">
        <div class="tleft">
            <img src="${arr[val].dp}" alt="">
        </div>
        <div class="tright">
            <h1>${arr[val].name}</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <h3>${arr[val].pricing}</h3>
            <button id="${i}">BUY NOW</button>
        </div>
    </div>`
    })
    document.querySelector("#container").innerHTML = carttempt 
}
document.querySelector("h6").textContent = arr2.length
})

showcards(arr)











var cart = document.querySelector("#cart")
cart.addEventListener("click", function(){
    cartpanel.style.display = "initial"
})
var close = document.querySelector("#closebtn")
close.addEventListener("click", function(){
    cartpanel.style.display = "none"
})






// function cartItems(){
//     var arr2 = []
//     arr.forEach(function(elem){
//         if(elem.addtocart){
//             arr2.push(elem)
//         }

//     })
// }
// document.querySelector("button").addEventListener("click", function(){
//     cartItems()
// })











