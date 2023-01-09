import {
    renderItemsList,
} from "./domUtilities.js";
import { seedDoctors } from "./seed.js";

const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortSwitch = document.getElementById("sort_switch");
const countButton = document.getElementById("count_button");
const countField = document.getElementById("count_field");

let doctors = seedDoctors();

const countPatients = () => {
    var result = 0;
    doctors.forEach(element => {
        result += element.patients;
    });
    return result;
};

sortSwitch.addEventListener("change", () => {
    if (sortSwitch.checked) {
        const sortedDoctors = doctors.slice();
        renderItemsList(sortedDoctors.sort((a, b) => {
            return ((a.experience < b.experience) ? -1 
                    : ((a.experience > b.experience) ? 1 
                    : 0));
            }));
    } else {
        renderItemsList(doctors);
    }
});

countButton.addEventListener("click", () => {
    countField.innerHTML = countPatients();
});

findButton.addEventListener("click", (e) => {
    e.preventDefault();
    const foundDoctors = doctors.filter(
        (doctors) => doctors.name.search(findInput.value) !== -1
    );

    renderItemsList(foundDoctors);
});

cancelFindButton.addEventListener("click", (e) => {
    e.preventDefault();
    renderItemsList(doctors);

    findInput.value = "";
});

// main code
renderItemsList(doctors);