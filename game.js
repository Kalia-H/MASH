const firstCar = document.getElementById('car_1');
const secondCar = document.getElementById('car_2');
const thirdCar = document.getElementById('car_3');
const fourthCar = document.getElementById('car_4');
let newNumber;
let newNumber2;
function getNewNumber(number) {
    
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
function threeElementsLeft(newNumber) {
    if(newNumber == 1 || newNumber == 2 || newNumber == 3){
        newNumber2 = newNumber;
        crossOffCar2(newNumber2);
    }else if(newNumber == 4 || newNumber == 7 || newNumber == 10 || newNumber == 13 || newNumber == 16 || newNumber == 19 || newNumber == 22 || newNumber == 25 || newNumber == 28 || newNumber == 31 || newNumber == 34 || newNumber == 37 || newNumber == 40) {
        newNumber2 = 1;
        crossOffCar2(newNumber2);
    }else if(newNumber == 5 || newNumber == 8 || newNumber == 11 || newNumber == 14 || newNumber == 17 || newNumber == 20 || newNumber == 23 || newNumber == 26 || newNumber == 29 || newNumber == 32 || newNumber == 35 || newNumber == 38 || newNumber == 41) {
        newNumber2 = 2;
        crossOffCar2(newNumber2);
    }else if(newNumber == 6 || newNumber == 9 || newNumber == 12 || newNumber == 15 || newNumber == 18 || newNumber == 21 || newNumber == 24 || newNumber == 27 || newNumber == 30 || newNumber == 33 || newNumber == 36 || newNumber == 39 || newNumber == 42) {
        newNumber2 = 3;
        crossOffCar2(newNumber2);
    }else if(newNumber == 43 || newNumber == 46 || newNumber == 49 || newNumber == 52 || newNumber == 55) {
        newNumber2 = 1;
        crossOffCar2(newNumber2);
    }else if(newNumber == 44 || newNumber == 47 || newNumber == 50 || newNumber == 53 || newNumber == 56) {
        newNumber2 = 2;
        crossOffCar2(newNumber2);
    }else if(newNumber == 45 || newNumber == 48 || newNumber == 51 || newNumber == 54 || newNumber == 57) {
        newNumber2 = 3;
        crossOffCar2(newNumber2);
    }else{
        console.log('Error in threeElementsLeft');
    };
}

function crossOffCar(newNumber){ 
    
    if(newNumber == 0) {
        console.log('Car named: ', carList[newNumber]);
        firstCar.classList.add('crossOff');
        carList.splice(newNumber,1);
        threeElementsLeft(newNumber);
    }else if(newNumber == 1) {
        console.log('Car named: ', carList[newNumber]);
        secondCar.classList.add('crossOff');
        carList.splice(newNumber,1);
        threeElementsLeft(newNumber);
    }else if(newNumber == 2) {
        console.log('Car named: ', carList[newNumber]);
        thirdCar.classList.add('crossOff');
        carList.splice(newNumber,1);
        threeElementsLeft(newNumber);
    }else if(newNumber == 3) {
        console.log('Car named: ', carList[newNumber]);
        fourthCar.classList.add('crossOff');
        carList.splice(newNumber,1);
        threeElementsLeft(newNumber);
    }else {
        console.log('Error in crossOffCar()');
    };
    
}
function crossOffCar2(number) {
    console.log(carList);
    if(number == 1) {
       console.log('Second Car Named: ',carList[number]);
       firstCar.classList.add('crossOff'); 
    }else if(number == 2) {
        console.log('Second Car Named: ',carList[number]);
        secondCar.classList.add('crossOff');
    }else if(number == 3) {
        console.log('Second Car Named: ',carList[number]);
        thirdCar.classList.add('crossOff');
    }else{
        console.log('error in crossOffCar2');
    };
}