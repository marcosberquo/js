let carros = ["Clio", "KWid", "Porche", 10, new Date()];

// console.log(carros); 
// console.log(carros.length); // qtde. de itens
// console.log(carros[2]); // terceiro item
// console.log(carros[4].getFullYear());

carros.forEach(function(value, index){

    console.log(index, value);

});