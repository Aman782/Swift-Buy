 let btnId = JSON.parse(localStorage.getItem('btnId'));

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

console.log(btnId);

for(let list of myAllListings){
    if(list.id===btnId){
        console.log(list);
        let amount = document.querySelector('.net-amount');
        let p = document.createElement('p');
        let priceIn = document.querySelector('#price-in');
        priceIn.value = `${list.price}`;
        p.innerHTML = `Total bill = &#8377;${list.price}`;
        amount.appendChild(p);
        break;
    }
}