class CalcControler {

    constructor(){

        this._operacao = [];
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._dataCalcEl = document.querySelector("#data");
        this._horaCalcEl = document.querySelector("#hora");

        this._dataAual;

        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {                
        this.setDisplayTime();

        setInterval(()=>{
            this.setDisplayTime();
        }, 1000);
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });
    }

    clearAll(){
        this._operacao = [];
    }

    clearEntry(){
        this._operacao.pop();
    }

    setError(){
        this.displayCalc="error";
    }

    GetLastOperacao(){
        return  this._operacao[this._operacao.length-1];
    }

    IsOperador(value){
       return (['+','-','*','/', '%'].indexOf(value) > -1);
    }

    setLastOperador(value){
        this._operacao[this._operacao.length - 1] = value;
    }

    addOperation(value){

        if (isNaN(this.GetLastOperacao())){ //se não foi um número
            
            if (this.IsOperador(value)){
                this.setLastOperador(value); //substitui o operador
            }else{
                //outra coisa
                console.log(value);
            }

        }else {
               
             let novoValor = this.GetLastOperacao().toString() + value.toString();
             this.setLastOperador(value);
            console.log(novoValor);
        }

        //this._operacao.push(value);
        console.log(this._operacao);
    }

    execBtn(value){

        switch(value){
            case 'ac':
                this.clearAll();
                break;

            case 'ce':
                this.clearEntry();
                break;

                case 'soma':
                this.addOperation('+');
                break; 
                
                case 'subtracao':
                this.addOperation('-');
                break; 
                
                case 'divisao':
                this.addOperation('/');
                break; 
                
                
                case 'multiplicacao':
                this.addOperation('*');
                break; 

                
                case 'porcento':
                this.addOperation('%');
                break; 

                
                case 'igual':
               
                break; 

                case 'ponto':
                this.addOperation('.');
                break; 

                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                    this.addOperation(parseInt(value));
                    break;

                default:
                this.setError();
                break;


        }
    }

    initButtonsEvents() {
        
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        //let buttons = document.querySelector("#buttons > g.btn-9");

        // buttons.addEventListener('click', e=>{
        //         console.log(e);
        // 
        buttons.forEach((btn,index) => {


            //btn.addEventListener('click', e=>{
            this.addEventListenerAll(btn, 'click drag', e=>{

                //console.log(btn);
                let textBtn = btn.className.baseVal.replace("btn-","");
                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, 'mouseover mouseup mousedown ', e=>{

                //console.log(btn);
                btn.style.cursor = "pointer";
            });

        })
    }


    setDisplayTime() {
        //this.displayDate = this.dataAtual.toLocaleDateString(this._locale);
        this.displayDate = this.dataAtual.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.dataAtual.toLocaleTimeString(this._locale);
    }

    get displayDate() {
        return this._dataCalcEl.innerHTML;
    }

    set displayDate(value) {
        this._dataCalcEl.innerHTML = value;
    }

    get displayTime() {
        return this._horaCalcEl.innerHTML;
    }

    set displayTime(value) {
        this._horaCalcEl.innerHTML = value;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get dataAtual() {
        return new Date();
    }

    set dataAtual(value) {
        return this._dataAtual;
    }


}