import {
    renderItemsList,
} from "./dom.js";
import { seedTrips } from "./seed.js";

const searchButton = document.getElementById("search_button");
const cancelSearchButton = document.getElementById("cancel_search_button");
const findInput = document.getElementById("search_input");
const sortSwitch = document.getElementById("sort_switch");
const countField = document.getElementById("count_field");

let trips = seedTrips();

const countAverage = () => {
    var result = 0;
    trips.forEach(element => {
        result += element.days;
    });
    return Math.ceil(result/trips.length);
};

sortSwitch.addEventListener("change", () => {
    if (sortSwitch.checked) {
        const sortedTrips = trips.slice();
        renderItemsList(sortedTrips.sort((a, b) => {
            return ((a.price < b.price) ? -1 : ((a.price > b.price) ? 1 : 0));
        }));
    } else {
        renderItemsList(trips);
    }
});

searchButton.addEventListener("click", (e) => {
    e.preventDefault();
    const foundedTrips = trips.filter(
        (trips) => trips.city.search(findInput.value) !== -1
    );

    renderItemsList(foundedTrips);
});

cancelSearchButton.addEventListener("click", (e) => {
    e.preventDefault();
    renderItemsList(trips);

    findInput.value = "";
});

// main code
countField.innerHTML = countAverage();
renderItemsList(trips);