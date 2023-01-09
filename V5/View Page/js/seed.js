import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

let doctors = [];

function generateName() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const seedDoctors = () => {
    for (let index = 0; index < 7; index++) {
        const generatedId = uuidv4();
        const newItem = {
            id: generatedId,
            name: generateName(),
            price: Math.floor(Math.random() * 900),
            patients: Math.floor(Math.random() * 100),
            experience: Math.floor(Math.random() * 15)
        };
        doctors.push(newItem);
    }
    return doctors;
};