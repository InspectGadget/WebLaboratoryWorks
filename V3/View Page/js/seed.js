import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let ship = [];

function generateName() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const seedShip = () => {
    for (let index = 0; index < 5; index++) {
        const generatedId = uuidv4();
        const newItem = {
            id: generatedId,
            name: generateName(),
            capacity: Math.floor(Math.random() * 10000),
            fuel: Math.floor(Math.random() * 10000),
            weight: Math.floor(Math.random() * 10000)
        };
        ship.push(newItem);
    }
    return ship;
};