console.log("************** DELIVERABLE 05 *********************");

class SlotMachine {
  counter: number;
  constructor() {
    this.counter = 0;
  }

  play() {
    this.counter++;
    
    const num1 = Math.random() < 0.5
    const num2 = Math.random() < 0.5
    const num3 = Math.random() < 0.5

    if (num1 === num2 && num1 === num3) {
      console.log(`Congratulations!!!. You won ${this.counter} coins!!`)
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