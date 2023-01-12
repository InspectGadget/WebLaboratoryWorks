const itemsContainer = document.getElementById("items_container");

const itemTemplate = ({ id, name, capacity, fuel, weight }) => `
<li id="item-${id}" class="card m-2" style="width: 18rem;">
    <img src="./images/220212144422-01-wonder-of-the-seas-royal-caribbean.jpg.crdownload"
        class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Вмісткість: ${capacity}</li>
            <li class="list-group-item">Об'єм палива: ${fuel}</li>
            <li class="list-group-item">Вага: ${weight}</li>
        </ul>
        <a href="#" class="btn btn-warning">Edit</a>
        <a href="#" class="btn btn-danger">Delete</a>
    </div>
</li>`;


const addItemToPage = ({ id, name, capacity, fuel, weight }) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, name, capacity, fuel, weight })
    );
};

const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};
