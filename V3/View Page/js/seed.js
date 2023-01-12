
function generateName() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const seedShip = () => {
    for (let index = 0; index < 5; index++) {
        const generatedId = uuid.v1();
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