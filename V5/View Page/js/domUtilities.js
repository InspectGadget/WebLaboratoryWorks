const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, name, price, patients, experience }) => `
<li id="item-${id}" class="card m-2 bg-primary-subtle" style="width: 18rem;">
    <img src="./assets/doctor-character-background_1270-84.webp"
        class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item bg-info">Price: ${price}</li>
            <li class="list-group-item bg-info">Patients: ${patients}</li>
            <li class="list-group-item bg-info">Experience: ${experience}</li>
        </ul>
        <a href="#" class="btn btn-outline-light mt-4" style="width:48%">Edit</a>
        <a href="#" class="btn btn-outline-danger mt-4" style="width:48%">Delete</a>
    </div>
</li>`;


export const addItemToPage = ({ id, name, price, patients, experience }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, price, patients, experience })
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};
