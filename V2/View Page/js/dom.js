const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, city, description, price, days }) => `
<li id="item-${id}" class="card m-4">
  <img src="./assets/12.jpg" class="card-img-top" alt="...">
  <div class="card-body bg-dark text-light">
    <h5 class="card-title">${city}</h5>
    <p class="card-text">${description}</p>
    <p class="card-text">Price: ${price}</p>
    <p class="card-text">Days: ${days}</p>
    <a href="#" class="btn btn-outline-light mt-4" style="width:49%">Edit</a>
    <a href="#" class="btn btn-outline-danger mt-4" style="width:49%">Delete</a>
  </div>
</li>`;


export const addItemToPage = ({ id, city, description, price, days }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, city, description, price, days })
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};
