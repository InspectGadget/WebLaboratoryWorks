
function generateName() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

const seedDoctors = () => {
    let doctorsTmp = [];
    for (let index = 0; index < 7; index++) {
        const generatedId = uuid.v1();
        const newItem = {
            id: generatedId,
            name: generateName(),
            price: Math.floor(Math.random() * 900),
            patients: Math.floor(Math.random() * 100),
            experience: Math.floor(Math.random() * 15)
        };
        doctorsTmp.push(newItem);
    }
    return doctorsTmp;
};