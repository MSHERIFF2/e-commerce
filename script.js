const api = 'https://fakestoreapi.com/products'

async function fetchDataHero() {
    let res = await fetch(api)
    let items = await res.json()
    let heroImage = document.getElementById('heroImage')
    let imagef1 = document.getElementById('imagef1')
    let title1 = document.getElementById('label1')
    let price1 = document.getElementById('price1')

    let imagef2 = document.getElementById('imagef2')
    let title2 = document.getElementById('label2')
    let price2 = document.getElementById('price2')

    let imagef3 = document.getElementById('imagef3')
    let title3 = document.getElementById('label3')
    let price3 = document.getElementById('price3')

   heroImage.src = items[7].image;

   imagef1.src = items[10].image;
   title1.innerText = items[10].title;
   price1.innerText = `Price: $${items[10].price}`;
 

   imagef2.src = items[14].image;
   title2.innerText = items[14].title;
   price2.innerText = `Price: $${items[14].price}`;
   

   imagef3.src = items[18].image;
   title3.innerText = items[18].title;
   price3.innerText = `Price: $${items[18].price}`;
    
}

fetchDataHero()
