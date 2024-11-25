    function calculator() {
    let num1 = +prompt("Бірінші санды енгізіңіз:");
    let num2 = +prompt("Екінші санды енгізіңіз:");
  
    let qosu = num1 + num2;
    let alu = num1 - num2;
    let kobeitu = num1 * num2;
    let bolu = num1 / num2;
  
  alert(`Нәтиже:
  Қосу: ${qosu}
  Алу: ${alu}
  Көбейту: ${kobeitu}
  Бөлу: ${bolu}`);
  }
  
  calculator();
