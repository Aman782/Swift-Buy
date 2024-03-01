
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



// Selecting all buttons with the class 'btn-click'
let btns = document.querySelectorAll('.btn-click');
    
    // Loop through each button using for...of loop
    for (let btn of btns) {
        btn.addEventListener('click', function(event) {
            // event.preventDefault();
            
            let btnId = this.id;
            for(list of myAllListings){
                let id = list.id;
                if(id===btnId){
                    alert(`Item price is: ${list.price}`);
                    break;
                }
            }
        });
    }


// Add cart 

const cartBox = [];

let cartBtn = document.querySelectorAll('.cart');

for(let cart of cartBtn){
    cart.addEventListener('click', ()=>{
        let id = cart.getAttribute('id');
        let sup = document.querySelector('#sup');
        cart.innerText = `Added`;
        // console.log(id);
        cartBox.push(id);
        sup.innerText = `${cartBox.length}`;
        console.log(cartBox);
    
        // Save cartItems to local storage
        localStorage.setItem('cartBox', JSON.stringify(cartBox));
    });
};


let clickBtns = document.querySelectorAll('.btn-click');

for(let btn of clickBtns){
    btn.addEventListener('click', ()=>{
        let btnId = btn.getAttribute('id');
        localStorage.setItem('btnId', JSON.stringify(btnId));
    })
}


let heroImg = document.querySelector('#hero-img');
let counter = 1;
setInterval(()=>{
    if(counter<6){
        heroImg.src = `hero_image${counter}.jpg`
        console.log(heroImg)
        counter++;
    }else{
        counter = 1;
    }

}, 2500);

