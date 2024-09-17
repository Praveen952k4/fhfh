let localStorageElements= JSON.parse(localStorage.getItem('foodItems'));
let totalCount = localStorageElements.reduce((sum, item) => sum + (item.count * item.price), 0);
let subTotalElement = document.getElementById('subtotal');
let taxElement=document.getElementById('tax_val');
let totalElement=document.getElementById('total');
// const cartFoodItems = [
//   {
//     name: "Chapati",
//     price: 100.0,
//     count: 0,
//     web: "https://th.bing.com/th/id/OIP.2QoIkJxfhNslsJrY8k2TfAHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   },
//   {
//     name: "Ramen bowl",
//     price: 100.0,
//     count: 0,
//     web: "https://th.bing.com/th/id/OIP.x-1Rn2BPDZ8QNjTmUbx3QAHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3",
//   },
//   {
//     name: "Chapati",
//     price: 100.0,
//     count: 0,
//     web: "https://th.bing.com/th/id/OIP.2QoIkJxfhNslsJrY8k2TfAHaFj?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//   },
// ];
  // {
  //   name: "Frankie",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.x-1Rn2BPDZ8QNjTmUbx3QAHaHa?pid=ImgDet&w=200&h=200&c=7&dpr=1.3",
  // },
  // {
  //   name: "Noodles",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://www.thespruceeats.com/thmb/b5TG9lMFOtAmFkqWoOzMaRvL2Fk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-southern-fried-chicken-3056867-hero-01-58b66ff9e2f14b86bfdd50c7088cfe45.jpg",
  // },
  // {
  //   name: "Fish",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.8-hIBxuk2aR5lmY7CHN38wHaE7?w=275&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "model7",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.ruNe8SGMprPczHMTKOjV-QHaE5?w=296&h=196&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "model8",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.tTYO2xFwhnWqthCpnPT97gHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "Noodles",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.te9gPiD8UiUZ0XQ1qcAjEAHaEL?w=283&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "model10",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.ga0ROyhrbeISa3RuFVB34gHaEK?w=285&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "model11",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.occg_F34lY-U35Ywbgs-uQHaE7?w=283&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "model12",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.JqR-Z7cf_ZsW9okAotb8_wHaE8?w=298&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "model13",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/admin/How_To_Make_Homemade_Idiyappam_Recipe__Rice_Sevai_Recipe_1600.jpg",
  // },
  // {
  //   name: "model14",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://th.bing.com/th/id/OIP.ugOanrbz8U_Inxwinpv4pQHaE8?w=264&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  // },
  // {
  //   name: "model15",
  //   price: 100.0,
  //   count: 0,
  //   web: "",
  // },
  // {
  //   name: "model16",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Farrukh_Aziz_Ansari/Bedmi_Poori.jpg",
  // },
  // {
  //   name: "model17",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://i0.wp.com/www.relishthebite.com/wp-content/uploads/2015/05/Kothuparotta8.jpg",
  // },
  // {
  //   name: "model18",
  //   price: 100.0,
  //   count: 0,
  //   web: "https://s3.scoopwhoop.com/dan/29/2.jpg",
  // },
  // {
  //   name: "model19",
  //   price: 100.0,
  //   count: 0,
  // },
//];
displayCartItems();
function displayCartItems(){
  let container = document.getElementById(`food-item`);
  console.log(totalCount);
  console.log(container);
  container.innerHTML = "";
  for(let t = 0;t<localStorageElements.length;t+=1){
    if (container && localStorageElements[t].count !== 0 ) {
      
  
      
        // const item = foodItems[itemIndex];
        // const itemTotal = item.price * item.count;
        // subtotal += itemTotal;
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("item-container");
        itemContainer.setAttribute('id',`item-container-${localStorageElements[t].buttonListId}`);
        
        itemContainer.innerHTML = `
          <img src="${localStorageElements[t].web}" alt="${localStorageElements[t].name}">
          <div class="item-info">
            <h2>${localStorageElements[t].name}</h2>
            <p id="rupees-${localStorageElements[t].buttonListId}">Rs. ${(localStorageElements[t].price * localStorageElements[t].count).toFixed(2)}</p>
          </div>
          
          <div class="item-third">
            <div class="item-counter">
              <button onclick="decrement('${localStorageElements[t].buttonListId}','${container}')">-</button>
              <p id="counter-${localStorageElements[t].buttonListId}">${localStorageElements[t].count}</p>
              <button onclick="increment('${localStorageElements[t].buttonListId}')">+</button>
            </div>
          </div>`;

        container.appendChild(itemContainer);
        subTotalElement.textContent = `Rs. ${totalCount}.00`;
        let fivePercentOfTotal = totalCount * 0.05;
        taxElement.textContent=`Rs.${(fivePercentOfTotal)}.00`;
        totalElement.textContent=`Rs.${(fivePercentOfTotal+totalCount)}.00`;
      //updateTotals();
    } 
  }

}

function increment(item) {
  if (item === '') {
      alert("Please select a food");
  } else {
      let foodItemsRetrieved = JSON.parse(localStorage.getItem('foodItems')) || [];
      let totalCountRetrieved = parseInt(localStorage.getItem('totalCount')) || 0; // Initialize total count
      
      for (let t = 0; t < foodItemsRetrieved.length; t++) {
          if (foodItemsRetrieved[t].buttonListId === item) {
              foodItemsRetrieved[t].count += 1;
              totalCountRetrieved += 1; // Increment total count
              //displayCartItems();
            
              let itemPrice = document.getElementById(`rupees-${localStorageElements[t].buttonListId}`);
              itemPrice.textContent = `Rs. ${(foodItemsRetrieved[t].price * foodItemsRetrieved[t].count).toFixed(2)}`;
              //console.log(`Rs. ${(localStorageElements[t].price * localStorageElements[t].count).toFixed(2)}`);
              let updatedCount=document.getElementById(`counter-${localStorageElements[t].buttonListId}`);
              //console.log(updatedCount);
              updatedCount.textContent = `${foodItemsRetrieved[t].count.toString()}`;
              // Store the updated values in localStorage
              localStorage.setItem('foodItems', JSON.stringify(foodItemsRetrieved));
              localStorage.setItem('totalCount', totalCountRetrieved.toString());
              
              // let foodItems2 = localStorage.getItem("foo")
              let totalSum = foodItemsRetrieved.reduce((acc, item) => {
                return acc + (item.price * item.count);
            }, 0);
            let fivePercentOfTotal = totalSum * 0.05;
            taxElement.textContent=`Rs.${(fivePercentOfTotal)}.00`;
              subTotalElement.textContent = `Rs.${(totalSum)}.00 `;
              totalElement.textContent=`Rs.${(fivePercentOfTotal+totalSum)}.00`;
              //getCartTotal(); // Call your function to update the cart total
              break; // Exit the loop since we found the item
          }
      }

      let y = JSON.parse(localStorage.getItem('foodItems'));
      console.log(y);
  }
}



      function decrement(item) {

        let foodItemsRetrieved = JSON.parse(localStorage.getItem('foodItems'));
        let totalCountRetrieved= parseInt(localStorage.getItem('totalCount'));
        
        
              for(let t = 0; t<foodItemsRetrieved.length; t++){
                  if((foodItemsRetrieved[t].count === 1)&&(item===foodItemsRetrieved[t].buttonListId)){
                    let containerHere = document.getElementById(`item-container-${localStorageElements[t].buttonListId}`);
                    containerHere.style.display = 'none';
                    
                    foodItemsRetrieved[t].count -= 1;
                    totalCountRetrieved -= 1;
                    
                    localStorage.setItem('foodItems', JSON.stringify(foodItemsRetrieved));
                    localStorage.setItem('totalCount',totalCountRetrieved.toString());
                    
                    let totalSum = foodItemsRetrieved.reduce((acc, item) => {
                      return acc + (item.price * item.count);
                  }, 0);
                  let fivePercentOfTotal = totalSum * 0.05;
            totalElement.textContent=`Rs.${(fivePercentOfTotal)}.00`;
                    subTotalElement.textContent = `Rs.${(totalSum)}.00 `;
                    
                  }
                  else if(foodItemsRetrieved[t].buttonListId===item && foodItemsRetrieved[t].count>0){
                      foodItemsRetrieved[t].count -= 1;
                      totalCountRetrieved -= 1;
                      // displayCartItems();
                      
                      let itemPrice = document.getElementById(`rupees-${localStorageElements[t].buttonListId}`);
                      itemPrice.textContent = `Rs. ${(foodItemsRetrieved[t].price * foodItemsRetrieved[t].count).toFixed(2)}`;
                      let totalSum = foodItemsRetrieved.reduce((acc, item) => {
                        return acc + (item.price * item.count);
                    }, 0);
                      subTotalElement.textContent = `Rs.${(totalSum)}.00 `;
                      let updatedCount=document.getElementById(`counter-${localStorageElements[t].buttonListId}`);
                      // //console.log(updatedCount);
                      updatedCount.textContent = foodItemsRetrieved[t].count.toString();

                      localStorage.setItem('foodItems', JSON.stringify(foodItemsRetrieved));
                      localStorage.setItem('totalCount',totalCountRetrieved.toString());
                      //getCartTotal();
                      let fivePercentOfTotal = totalSum * 0.05;
                      taxElement.textContent=`Rs.${(fivePercentOfTotal)}.00`;
                    subTotalElement.textContent = `Rs.${(totalSum)}.00 `;
                    totalElement.textContent=`Rs.${(fivePercentOfTotal+totalSum)}.00`;

                  }
              
              
              }
              let y = JSON.parse(localStorage.getItem('foodItems'));
              console.log(y);

          }
          
          

          







const apiURL =
  "https://s12j4nb21k.execute-api.ap-south-1.amazonaws.com/message/telFunc?token=7274047456:AAFlt1ylqNDj2Nbq-ddOaw9rnz-N-DF4RoE&chat_id=-4542112220&message=hello";
const fetchBtn = document.getElementById("checkout-button");
const retryBtn = document.getElementById("retryBtn");
const spinner = document.getElementById("loaderOverlay");
const spinner2 = document.getElementById("spinner");

fetchBtn.addEventListener("click", () => {
  fetchAPI();
});

async function fetchAPI() {
  spinner.style.display = "block";
  spinner2.style.display = "block";
  const response = await fetch(apiURL).catch(() => {
    spinner.style.display = "none";
    spinner2.style.display = "none";
    showFailureDialog();
    return null;
  });

  spinner.style.display = "none";
  spinner2.style.display = "none";

  if (response && response.status === 200) {
    spinner.style.display = "block";
    spinner2.style.display = "block";

    window.location.href = "success.html";
    cartCount = 0;
    neededFoods = [];
    neededFoodsCount = [];
  } else if (response) {
    window.location.href = "failure.html";
    showFailureDialog();
  }
}
