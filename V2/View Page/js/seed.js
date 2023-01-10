import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let trips = [];

function generateName() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 12; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const seedTrips = () => {
    for (let index = 0; index < 6; index++) {
        const generatedId = uuidv4();
        const newItem = {
            id: generatedId,
            city: generateName(),
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nisi placeat molestias minima aut architecto dolore, blanditiis veritatis! Exercitationem ut voluptas repellendus dolorem ducimus placeat dolore aspernatur culpa minima cumque?',
            price: Math.floor(Math.random() * 3000),
            days: Math.floor(Math.random() * 18)
        };
        trips.push(newItem);
    }
    return trips;
};