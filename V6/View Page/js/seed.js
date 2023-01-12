
function generateName() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const seedCabins = () => {
    let cabinsTmp = [];
    for (let index = 0; index < 10; index++) {
        const generatedId = uuid.v1();
        const newItem = {
            id: generatedId,
            name: generateName(),
            price: Math.floor(Math.random() * 10000000),
            available: Math.random() < 0.5,
            area: Math.floor(Math.random() * 500)
        };
        cabinsTmp.push(newItem);
    }
    return cabinsTmp;
};