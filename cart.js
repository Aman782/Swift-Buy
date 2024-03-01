// Retrieve cartItems from local storage on the cart page
let cartBox = JSON.parse(localStorage.getItem('cartBox'));

console.log(cartBox);


const myAllListings = [
    {
        id: "box1",
        item_no: 1,
        price: 103990,
    },
    {
        id: "box2",
        item_no: 2,
        price: 3990,
    },
    {
        id: "box3",
        item_no: 3,
        price: 290,
    },
    {
        id: "box4",
        item_no: 4,
        price: 499,
    },
    {
        id: "box5",
        item_no: 5,
        price: 899,
    },
    {
        id: "box6",
        item_no: 6,
        price: 8990,
    },
    {
        id: "box7",
        item_no: 7,
        price: 4999,
    },
    {
        id: "box8",
        item_no: 8,
        price: 599,
    },
    {
        id: "box9",
        item_no: 9,
        price: 7999,
    },
    {
        id: "box10",
        item_no: 10,
        price: 1499,
    },
    {
        id: "box11",
        item_no: 11,
        price: 299,
    },
    {
        id: "box12",
        item_no: 12,
        price: 14990,
    }
];





let cartItems = document.querySelector('.cart-items');
// let cartClick = document.getElementById('Cart-pg');
// console.log(document.getElementById('Cart-pg'));
// console.log(cartClick);

console.log(getTotal());



    console.log(cartBox);
    for(let id of cartBox){
        let price = -1;
        for(let item of myAllListings){
            if(item.id==id){
                price = item.price;
                break;
            }
        }
    
        if(price!=-1){
            let div = document.createElement('div');
            let para = document.createElement('p');
            let img = document.createElement('img');
            
            div.setAttribute('class', "item");
            para.innerHTML = `Price is : &#8377;${price}`;
            img.setAttribute('src', 'TrashByI,g.jpg');
            img.setAttribute('id', 'del-img');
            div.appendChild(para);
            div.appendChild(img);
            cartItems.appendChild(div);
            
            
            
        }else if(cartBox.length===0){
            let div = document.createElement('div');
            
            div.innerHTML = `<h2> Oops no item yet! </h2>`;
            cartItems.appendChild(div); 
        }
    }
    
    
    
    let priceDiv = document.createElement('div');
    let p = document.createElement('p');
    let continueBtn = document.createElement('button');
    let a = document.createElement('a');

    continueBtn.setAttribute('id', 'continue-btn');
    a.setAttribute('href', 'order.html')
    a.innerText = `Continue`;
    continueBtn.appendChild(a);
    priceDiv.setAttribute('class', 'price-div');
    p.innerHTML = `
      Total = &#8377;${getTotal()}
    `
    priceDiv.appendChild(p);
    priceDiv.appendChild(continueBtn);
    cartItems.appendChild(priceDiv);


function getTotal(){
    let total = 0;
    for(let p of cartBox){
        for(let item of myAllListings){
            if(item.id===p){
                total += item.price;
            }
        }
    }
    return total;
}

cartBox.splice(0, cartBox.length)
console.log("After splicing ", cartBox);

    

let allImg = document.querySelectorAll('#del-img');

for(let img of allImg){
    img.addEventListener('click', ()=>{
       //console.log(img.parentElement);
       img.parentElement.remove();
    });
}


    
