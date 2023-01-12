
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortSwitch = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_button");
const countOutput = document.getElementById("count_output");

let ship = [];

const countWeight = () => {
    var result = 0;
    ship.forEach(element => {
        result += element.weight;
    });
    return result;
};

sortSwitch.addEventListener("change", () => {
    if (sortSwitch.checked) {
        const sortedShip = ship.slice();
        renderItemsList(sortedShip.sort((a, b) => {
            var x = a.capacity; var y = b.capacity;
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }));
    } else {
        renderItemsList(ship);
    }
});

countButton.addEventListener("click", () => {
    countOutput.innerHTML = countWeight();
});

findButton.addEventListener("click", () => {
    const foundShip = ship.filter(
        (ship) => ship.name.search(findInput.value) !== -1
    );

    renderItemsList(foundShip);
});

cancelFindButton.addEventListener("click", () => {
    renderItemsList(ship);

    findInput.value = "";
});

// main code
ship = seedShip();
renderItemsList(ship);