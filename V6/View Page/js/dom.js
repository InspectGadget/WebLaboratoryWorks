const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, name, price, available, area }) => `
<li id="item-${id}" class="card mb-3 bg-dark" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="./assets/C0283T01.png" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title text-light">${name}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-dark-subtle">Price: ${price}</li>
            <li class="list-group-item bg-dark-subtle">Square meters: ${area}</li>
            <li class="list-group-item bg-dark-subtle">Available: ${available}</li>
        </ul>
        <a href="#" class="btn btn-outline-light mt-4" style="width:48%">Edit</a>
        <a href="#" class="btn btn-outline-danger mt-4" style="width:48%">Delete</a>
      </div>
    </div>
  </div>
</li>`;


export const addItemToPage = ({ id, name, price, available, area }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, price, available, area })
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};
