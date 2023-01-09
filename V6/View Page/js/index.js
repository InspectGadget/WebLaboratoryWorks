import {
    renderItemsList,
} from "./dom.js";
import { seedCabins } from "./seed.js";

const findButton = document.getElementById("search_button");
const cancelFindButton = document.getElementById("cancel_search_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const countField = document.getElementById("count_field");

let cabins = seedCabins();

const countAvailable = () => {
    var result = 0;
    cabins.forEach(element => {
        result += element.available ? 1 : 0;
    });
    return result;
};

sortSwitch.addEventListener("change", () => {
    if (sortSwitch.checked) {
        const sortedCabins = cabins.slice();
        renderItemsList(sortedCabins.sort((a, b) => {
            return ((a.price < b.price) ? -1 : ((a.price > b.price) ? 1 : 0));
        }));
    } else {
        renderItemsList(cabins);
    }
});

countButton.addEventListener("click", () => {
    countField.innerHTML = countAvailable();
});

findButton.addEventListener("click", (e) => {
    e.preventDefault();
    const foundedCabins = cabins.filter(
        (cabins) => cabins.name.search(findInput.value) !== -1
    );

    renderItemsList(foundedCabins);
});

cancelFindButton.addEventListener("click", (e) => {
    e.preventDefault();
    renderItemsList(cabins);

    findInput.value = "";
});

// main code
renderItemsList(cabins);