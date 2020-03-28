var ada = {
    title: "ada",
    species: "cat",
    breed: "bengal",
    describe(){
         console.log(this.title + " is a " + this.species + " of the breed " + this.breed);
    }
}

var describe = ada.describe;
ada.describe();
describe();

var eevee = {
    title: 'eevee',
    species: 'rabbit',
    breed: 'holland lop',
}
eevee.describe = describe;

eevee.describe();

var pixel = {
    title: 'pixel',
    species: 'dog',
    breed: 'corgi'
}
pixel.describe = eevee.describe.bind(ada);

pixel.describe();
