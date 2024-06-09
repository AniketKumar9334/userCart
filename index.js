let user = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
    },
    {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
    },
    {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
    },
    {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
    },
    {
      id: 6,
      name: "Mrs. Dennis Schulist",
      username: "Leopoldo_Corkery",
      email: "Karley_Dach@jasper.info",
    },
    {
      id: 7,
      name: "Kurtis Weissnat",
      username: "Elwyn.Skiles",
      email: "Telly.Hoeger@billy.biz",
    },
    {
      id: 8,
      name: "Nicholas Runolfsdottir V",
      username: "Maxime_Nienow",
      email: "Sherwood@rosamond.me",
    },
    {
      id: 9,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 10,
      name: "Clementina DuBuque",
      username: "Moriah.Stanton",
      email: "Rey.Padberg@karina.biz",
    },
  ];


const ele = document.querySelector('.users');
let dataArray = JSON.parse(localStorage.getItem('user-cart')) || []


// let addCart = document.getElementById('add-cart')
let cartCount = document.getElementById('count')
cartCount.innerText = dataArray.length;

user.map(item =>{


    ele.innerHTML += `
    <div class="user" key=${item.id}>
        <div>
            <div>
                <p>Name:</p>
                <p>Email:</p>
                <p>username:</p>
            </div>
            <div >
                <p>${item.name}</p>
                <p>${item.email}</p>
                <p>${item.username}</p>
            </div>
        </div>

            
        <button id='add-cart' onclick="addToCart(${item.id})">Add to Cart</button>

        
    </div>
    `

})



const addToCart = (item) =>{
    
    user.forEach(element => {
      if(element.id ==  item){

        dataArray.push(element)
      }
    });
    cartCount.innerText = dataArray.length
    localStorage.setItem('user-cart', JSON.stringify(dataArray));
}



