
let newNumber;
function getNewNumber(number) {
    console.log('number is: ',number);
    if(number == 1 || number == 2 || number == 3){
        newNumber = number;
        crossOffCar(newNumber);
    }else if(number % 4 == 0) {
        newNumber = 0;
        crossOffCar(newNumber);
    }else if(number == 5 || number == 9 || number == 13 || number == 17 || number == 21 || number == 25 || number == 29 ||number == 33 ||number == 37 || number == 41 || number == 45 || number == 49 || number == 53) {
        newNumber = 1;
        crossOffCar(newNumber);
    }else if(number == 6 || number == 10 || number == 14 || number == 18 || number == 22 || number == 26 || number == 30 || number == 34 || number == 38 || number == 42 || number == 46 || number == 50 || number == 54) {
        newNumber = 2;
        crossOffCar(newNumber);
    }else if(number == 7 || number == 11 || number == 15 || number == 19 || number == 23 || number == 27 || number == 31 || number == 35 || number == 39 || number == 43 || number == 47 ||number == 51 || number == 55) {
        newNumber = 3;
        crossOffCar(newNumber);
        
        
    }else {
        console.log('lets give this another shot');
    };

}

function crossOffCar(newNumber){
    const firstCar = document.getElementById('car_1');
    const secondCar = document.getElementById('car_2');
    const thirdCar = document.getElementById('car_3');
    const fourthCar = document.getElementById('car_4');

    if(newNumber == 0) {
        console.log('Car named: ', carList[newNumber]);
        firstCar.classList.add('crossOff');
    }else if(newNumber == 1) {
        console.log('Car named: ', carList[newNumber]);
        secondCar.classList.add('crossOff');
    }else if(newNumber == 2) {
        console.log('Car named: ', carList[newNumber]);
        thirdCar.classList.add('crossOff');
    }else if(newNumber == 3) {
        console.log('Car named: ', carList[newNumber]);
        fourthCar.classList.add('crossOff');
    }else {
        console.log('Error in crossOffCar()');
    };
    
    
    
    
    
}
