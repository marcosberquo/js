let Celular = function(){
    
    this.Cor = "prata";

    this.Ligar = function(){ 

        console.log("uma ligação");
        return "ligando";

    }
}

let objeto = new Celular();
console.log(objeto.Ligar());

// jeito antigo de escrever classes
class Celular2 {

    constructor(){

        this.Cor = "prata";
    }

    Ligar(){

        console.log("uma ligação");
        return "ligando";

    }
}

let objeto2 = new Celular2();
console.log(objeto2.Ligar());