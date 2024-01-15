const Products = [
    { id: 1, name: "Air-Jordan-1 blue", price: 100 ,img:'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Off-White-University-Blue-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1606321054&q=57' },
    { id: 2, name: "Air-Jordan-1 Dior", price: 200 , img:'https://images.stockx.com/images/Air-Jordan-1-Retro-High-Dior-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1607043976&q=57,'},
    { id: 3, name: "Jordan 1 High Yellow", price: 5005 , img:'https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Yellow-Ochre-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1704312218&q=57'},
    { id: 4, name: "Air-Jordan-11-Retro", price: 400 , img:'https://images.stockx.com/images/Air-Jordan-11-Retro-DMP-Defining-Moments-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1699989594&q=57'},
    { id: 5, name: "Adidas-Campus Black", price: 1000 , img:'https://images.stockx.com/images/adidas-Campus-00s-Core-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1681283876&q=57'},
    { id: 6, name: "Jordan 1 design-x-", price: 1199 , img:'https://images.stockx.com/images/Air-Jordan-1-Low-fragment-design-x-Travis-Scott-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1629307046&q=57'},
  ];
  const productsList = document.querySelector(".productsList");
  const cartList = document.querySelector(".cartList");
  const cartText = document.querySelector(".cartText");
  const totalPrice = document.querySelector(".totalPrice");

// update cart section 
  function updateCart(e,count){
    // update the value of count in the cart 
    e.target.parentNode.children[1].innerText = count;

    // select the name from the cart 
    let selectedProdName = e.target.parentNode.parentNode.children[0].innerText;

    Products.forEach((prod) => {
        if (prod.name === selectedProdName) {
          prod.count = count;
        }
      });
    
      // Update the carts
      cartList.innerHTML = "";
      let total = 0;
    
      Products.forEach((prod) => {
        if (prod.count > 0) {
          let div = document.createElement("div");
          div.innerHTML = `<p>${prod.name}<p>
            <p><span class="item-count">${prod.count}</span> x <span class="item-price">₹${prod.price}</span></p>`;
    
          total += prod.count * prod.price;
          div.classList.add("cardBox");
          cartList.appendChild(div);
        }
      });
    
    
      totalPrice.innerText = `Total: ₹${total}`;
    
      if (cartList.children.length === 0) {
        cartList.appendChild(cartText);
        cartText.innerHTML = `No Product added to the cart!!`;
        cartText.classList.add("noPro");
        totalPrice.innerText ='';
      } 
  }

//   add button featur in button productsList
   productsList.addEventListener('click',(e)=>{
    if(e.target.innerHTML === '+'){
        // taking no from from the product button quantity 
        let count = Number(e.target.parentNode.children[1].innerText);
        count++;
        updateCart(e,count);
    }
    else if(e.target.innerHTML === '-'){
        // taking no from from the product button quantity 
        let count = Number(e.target.parentNode.children[1].innerText);
        if(count > 0){
            count--
            updateCart(e,count);
        }
        else {
            alert("Action is Not possible!!");
            return;
        }
    }
   });
//  display the product in the productsList
  function displayResult(){
    productsList.innerHTML = "";
    Products.forEach((product) => {
        let iteamList = document.createElement("div");
        iteamList.innerHTML = `<h5 class="h5">${product.name}</h4>
                               <img src=${product.img}>`

        let priceTag = document.createElement('div');
        priceTag.innerHTML = `<span class="tag">Price</span>
                              <p class="price">$${product.price}</p>`

        let productButton = document.createElement("div");
        productButton.innerHTML = `<button class="min">-</button>
                                   <span class="quantity">0</span>
                                   <button class="plus">+</button>`

        productButton.classList.add("productButton");
        priceTag.classList.add("mainTag");
        iteamList.classList.add("iteamList");

        iteamList.appendChild(priceTag);
        iteamList.appendChild(productButton);
        productsList.appendChild(iteamList);
    });
  }

window.onload = ()=> displayResult();


