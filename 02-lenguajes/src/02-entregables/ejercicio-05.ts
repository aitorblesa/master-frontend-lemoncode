console.log("************** DELIVERABLE 05 *********************");

/*
  El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases
  donde cada vez que juguemos insertemos una moneda.
  Cada máquina tragaperras (instancia) tendrá un contador de monedas
  que automáticamente se irá incrementando conforme vayamos jugando.

  Cuando se llame al método play el número de monedas se debe incrementar de forma automática
  y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
  El usuario habrá ganado en caso de que los tres booleanos sean true,
  y por tanto deberá mostrarse por consola el mensaje:
*/

class SlotMachine {
  counter: number;
  constructor() {
    this.counter = 0;
  }

  play() {
    this.counter++;
    
    const num1 = Math.random() < 0.5;
    const num2 = Math.random() < 0.5;
    const num3 = Math.random() < 0.5;
  
    if (num1 === num2 && num1 === num3 && num1 || num2 || num3 ) { 
      console.log(`Congratulations!!!. You won ${this.counter} coins!!`);
      this.counter = 0;
    } else {
      console.log("Good luck next time!!");
    }
    
  }
}

const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"