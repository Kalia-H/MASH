
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
    console.log('New Number is equal to: ', newNumber);
    if(newNumber == 0) {
        console.log('Car named: ', carList[newNumber]);
    }else if(newNumber == 1) {
        console.log('Car named: ', carList[newNumber]);
    }else if(newNumber == 2) {
        console.log('Car named: ', carList[newNumber]);
    }else if(newNumber == 3) {
        console.log('Car named: ', carList[newNumber]);
    }else {
        console.log('Error in crossOffCar()');
    };
    for (let i = 0; i <= newNumber; i++) { 
        const firstCar = document.getElementById('car_1');
        const secondCar = document.getElementById('car_2');
        const thirdCar = document.getElementById('car_3');
        const fourthCar = document.getElementById('car_4');
    
        if (firstCar && secondCar && thirdCar && fourthCar) { 
            setTimeout(() => {
                firstCar.classList.add('colorTheBack');
                setTimeout(() => {
                    firstCar.classList.remove('colorTheBack');
                }, 1000); // 1-second delay for removing class
    
                setTimeout(() => {
                    secondCar.classList.add('colorTheBack');
                    setTimeout(() => {
                        secondCar.classList.remove('colorTheBack');
                    }, 500);
                }, 1000); // 2-second delay before starting next car
    
                setTimeout(() => {
                    thirdCar.classList.add('colorTheBack');
                    setTimeout(() => {
                        thirdCar.classList.remove('colorTheBack');
                    }, 500);
                }, 1500); // 4-second delay before starting next car
    
                setTimeout(() => {
                    fourthCar.classList.add('colorTheBack');
                    setTimeout(() => {
                        fourthCar.classList.remove('colorTheBack');
                    }, 500);
                }, 2000); // 6-second delay before starting next car
            }, i * 3000); // Stagger each iteration by 8 seconds to account for all timings
        } else { 
            console.error('One or more elements not found'); 
        } 
    };
    
}
