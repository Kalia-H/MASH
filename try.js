
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const a = 0;
const b = 1;
let ab = 1;
let lineCount = 0;

ctx.translate(width / 2, height / 2); // Move the origin to the center of the canvas

function drawSpiral() {
    document.getElementById('sStopB').classList.remove('hidden');
    document.getElementById('sButton').classList.add('hidden');
    let theta = 0;
    let radius = 0;
    ctx.beginPath();
    
   
    function render() {
        if(ab === 1) {
            ctx.strokeStyle = 'orange';
            radius = a + b * theta; 
            const x = radius * Math.cos(theta);
            const y = radius * Math.sin(theta);
            ctx.lineTo(x,y);
            let thetaplus = theta;
            theta += 0.1;
            ctx.stroke();
            if(Math.abs(y) <= 1.5) {
                lineCount++;
            }
            requestAnimationFrame(render);
            
        }

    }
    render();
     
    
}

function stoptheS() {
    
    console.log('Line count: ' , lineCount); 
    ab = 0;
    getButton = document.getElementById('sStopB').classList.add('hidden');
    outputTheLine = document.getElementById('countOutput').classList.remove('hidden');
    newLcount = Math.floor(lineCount / 2);
    outputLineC = document.getElementById('countOutput').innerHTML = 'Your number is: ' + newLcount;

    getNewNumber(newLcount);
} 


function showCanvas() {
    const canvasB = document.getElementById('sButton');
    canvas.classList.remove('hidden');
    let showT = document.getElementById('spiralText').classList.remove('hidden');
    canvasB.classList.remove('hidden');
}
petList = [];
function get_pets() {
    pp1 = document.getElementById('gboard_q');
    ps1 = document.createTextNode('Enter the first pet: ');
    pi1 = document.createElement('input');
    pi1.type = 'text';
    pi1.id = 'pi1';
    const pb1 = document.createElement('button');
    pb1.type = 'button';
    pb1.textContent = 'Submit';
    pb1.id = 'pb1';

    pp1.appendChild(ps1);
    pp1.appendChild(pi1);
    pp1.appendChild(pb1);

    pb1.addEventListener('click', function() {
        p1user = document.getElementById('pi1').value;
        gbpet1 = document.getElementById('pet_1').innerHTML = p1user;
        petList.push(p1user);

        pp1.innerHTML = '';

        const pp2 = document.getElementById('gboard_q');
        const ps2 = document.createTextNode('Enter second pet: ');
        const pi2 = document.createElement('input');
        pi2.type = 'text';
        pi2.id = 'pi2';
        const pb2 = document.createElement('button');
        pb2.type = 'button';
        pb2.textContent = 'Submit';
        pb2.id = 'pb2';

        pp2.appendChild(ps2);
        pp2.appendChild(pi2);
        pp2.appendChild(pb2);

        pb2.addEventListener('click', function pet2() {
            pet2input = document.getElementById('pi2').value;
            placePet2 = document.getElementById('pet_2').innerHTML = pet2input;
            petList.push(pet2input);

            pp2.innerHTML = '';

            const pet3 = document.getElementById('gboard_q');
            const petText = document.createTextNode('Enter your 3rd pet: ');
            const petbox = document.createElement('input');
            petbox.type = 'text';
            petbox.id = 'petbox';
            const subbutton = document.createElement('button');
            subbutton.type = 'button';
            subbutton.textContent = 'Submit';
            subbutton.id = 'subbutton';

            pet3.appendChild(petText);
            pet3.appendChild(petbox);
            pet3.appendChild(subbutton);

            subbutton.addEventListener('click', function placePet3() {
                takeanswer = document.getElementById('petbox').value;
                placeanswer = document.getElementById('pet_3').innerHTML = takeanswer;
                petList.push(takeanswer);

                pet3.innerHTML = '';

                const pet4 = document.getElementById('gboard_q');
                const petText4 = document.createTextNode('Enter your last pet: ');
                const petbox4 = document.createElement('input');
                petbox4.type = 'input';
                petbox4.id = 'petbox4';
                const buttonp4 = document.createElement('button');
                buttonp4.type = 'button'
                buttonp4.textContent = 'Submit';
                buttonp4.id = 'buttonp4';

                pet4.appendChild(petText4);
                pet4.appendChild(petbox4);
                pet4.appendChild(buttonp4);

                buttonp4.addEventListener('click', function last_gameboard_piece() {
                    pet4recieved = document.getElementById('petbox4').value;
                    pet4placed = document.getElementById('pet_4').innerHTML = pet4recieved;
                    petList.push(pet4recieved);
                    

                    pet4.innerHTML = '';

                    showCanvas();
                })

            })
        
        })
    })
}
kidList = [];
function get_kids() {
    const pk1 = document.getElementById('gboard_q');
    const s1 = document.createTextNode('How many kids will you have? Enter first answer: ');
    const ib1 = document.createElement('input');
    ib1.type = 'text';
    ib1.id = 'ib1';
    const b1 = document.createElement('button');
    b1.type = 'b1';
    b1.textContent = 'Submit';
    b1.id = 'b1';

    pk1.appendChild(s1);
    pk1.appendChild(ib1);
    pk1.appendChild(b1);

    b1.addEventListener('click', function oc1() {
        ik1 = document.getElementById('ib1').value;
        put_ik1 = document.getElementById('kid_1').innerHTML = ik1;
        kidList.push(ik1);

        pk1.innerHTML = '';

        const pk2 = document.getElementById('gboard_q');
        const s2 = document.createTextNode('And again: ');
        const ib2 = document.createElement('input');
        ib2.type = 'text';
        ib2.id = 'ib2';
        const b2 = document.createElement('button');
        b2.type = 'button';
        b2.textContent = 'Submit';
        b2.id = 'b2';

        pk2.appendChild(s2);
        pk2.appendChild(ib2);
        pk2.appendChild(b2);

        b2.addEventListener('click', function k2h() {
            kid2input = document.getElementById('ib2').value;
            gb_input = document.getElementById('kid_2').innerHTML = kid2input;
            kidList.push(kid2input);

            pk2.innerHTML = '';

            const pk3 = document.getElementById('gboard_q');
            const s3 =document.createTextNode('Enter another: ');
            const ib3 = document.createElement('input');
            ib3.type = 'input';
            ib3.id = 'ib3';
            const b3 = document.createElement('button');
            b3.type = 'button';
            b3.textContent = 'Submit';
            b3.id = 'b3';

            pk3.appendChild(s3);
            pk3.appendChild(ib3);
            pk3.appendChild(b3);

            b3.addEventListener('click', function placek3() {
                inputk3 = document.getElementById('ib3').value;
                pk3here = document.getElementById('kid_3').innerHTML = inputk3;
                kidList.push(inputk3);

                pk3.innerHTML = '';

                const pk4 = document.getElementById('gboard_q');
                const s4 = document.createTextNode('Last one: ');
                const ib4 = document.createElement('input');
                ib4.type = 'input';
                ib4.id = 'ib4';
                const b4 = document.createElement('button');
                b4.type = 'button';
                b4.textContent = 'Submit';
                b4.id = 'b4';

                pk4.appendChild(s4);
                pk4.appendChild(ib4);
                pk4.appendChild(b4);

                b4.addEventListener('click', function last_k() {
                    lki = document.getElementById('ib4').value;
                    pk4h = document.getElementById('kid_4').innerHTML = lki;
                    kidList.push(lki);
                    

                    pk4.innerHTML = '';

                    
                    get_pets();
                })
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            })
            
        })
    })
}
placeList = [];
function get_places() {
    const place_space = document.getElementById('gboard_q');
    const place_s_ques = document.createTextNode('Name your first place: ');
    const place_i_box = document.createElement('input');
    place_i_box.type = 'text';
    place_i_box.id = 'place_i_box';
    const place_i_button = document.createElement('button');
    place_i_button.type = 'button';
    place_i_button.textContent = 'Submit';
    place_i_button.id = 'place_i_button';

    place_space.appendChild(place_s_ques);
    place_space.appendChild(place_i_box);
    place_space.appendChild(place_i_button);

    place_i_button.addEventListener('click', function add_place1() {
        

        userp1 = document.getElementById('place_i_box').value;
        place_p1 = document.getElementById('place_1').innerHTML = userp1;
        placeList.push(userp1);

        place_space.innerHTML = '';

        const place_space2 = document.getElementById('gboard_q');
        const place_s_ques2 = document.createTextNode('Enter your second place: ');
        const place_i_box2 = document.createElement('input');
        place_i_box2.type = 'text';
        place_i_box2.id = 'place_i_box2';
        const place_i_button2 = document.createElement('button');
        place_i_button2.type = 'button';
        place_i_button2.textContent = 'Submit';
        place_i_button2.id = 'place_i_button2';

        place_space2.appendChild(place_s_ques2);
        place_space2.appendChild(place_i_box2);
        place_space2.appendChild(place_i_button2);

        place_i_button2.addEventListener('click', function add_place2() {
            userp2 = document.getElementById('place_i_box2').value;
            place_p2 = document.getElementById('place_2').innerHTML = userp2;
            placeList.push(userp2);

            place_space2.innerHTML = '';

            const place_space3 = document.getElementById('gboard_q');
            const place_i_ques3= document.createTextNode('Enter your third place: ');
            const place_i_box3 = document.createElement('input');
            place_i_box3.type = 'input';
            place_i_box3.id = 'place_i_box3';
            const place_i_button3 = document.createElement('button');
            place_i_button3.type = 'button';
            place_i_button3.textContent = 'Submit';
            place_i_button3.id = 'place_i_button3';

            place_space3.appendChild(place_i_ques3);
            place_space3.appendChild(place_i_box3);
            place_space3.appendChild(place_i_button3);

            place_i_button3.addEventListener('click', function place_3() {
                console.log('this parts st8');
                const take_input = document.getElementById('place_i_box3').value;
                place_s_3 = document.getElementById("place_3").innerHTML = take_input;
                placeList.push(take_input);

                place_space3.innerHTML = '';

                const place_space4 = document.getElementById('gboard_q');
                const place_s_ques4 = document.createTextNode('Enter your last place: ');
                const place_s_box4 = document.createElement('input');
                place_s_box4.type = 'text';
                place_s_box4.id = 'place_s_box4';
                const place_button4 = document.createElement('button');
                place_button4.type = 'button';
                place_button4.textContent = 'Submit';
                place_button4.id = 'place_button4';

                place_space4.appendChild(place_s_ques4);
                place_space4.appendChild(place_s_box4);
                place_space4.appendChild(place_button4);

                place_button4.addEventListener('click', function place_4() {
                    uinput = document.getElementById('place_s_box4').value;
                    put_here = document.getElementById('place_4').innerHTML = uinput;
                    placeList.push(uinput);
                    

                    place_space4.innerHTML = '';

                    
                    get_kids();
                })

            })
        })

    })
}
let carList = [];
function get_cars() {
    
    let car_space = document.getElementById('gboard_q');
    let car_s_ques = document.createTextNode('Name your first car: ');
    let car_i_box = document.createElement('input');
    car_i_box.type = 'text';
    car_i_box.id = 'car_i_box';
    const car_i_button = document.createElement('button');
    car_i_button.type = 'button';
    car_i_button.textContent = 'Submit';
    car_i_button.id = 'car_i_button';

    car_space.appendChild(car_s_ques);
    car_space.appendChild(car_i_box);
    car_space.appendChild(car_i_button);

    car_i_button.addEventListener('click', function add_car1() { 
        
        const userinput = document.getElementById('car_i_box').value;
        const place_c1 = document.getElementById('car_1').innerHTML = userinput;
        carList.push(userinput);
        clear = car_space.innerHTML = '';
        
        const car_space2 = document.getElementById('gboard_q');
        const car_s_ques2 = document.createTextNode('Name your second car: ');
        const car_i_box2 = document.createElement('input');
        car_i_box2.type = 'text';
        car_i_box2.id = 'car_i_box2';
        const car_i_button2 = document.createElement('button');
        car_i_button2.type = 'button';
        car_i_button2.textContent = 'Submit';
        car_i_button2.id = 'car_i_button2';

        car_space2.appendChild(car_s_ques2);
        car_space2.appendChild(car_i_box2);
        car_space2.appendChild(car_i_button2);
         
        car_i_button2.addEventListener('click', function add_car2() {

            const userinput2 = document.getElementById('car_i_box2').value;
            const place_c2 = document.getElementById('car_2').innerHTML = userinput2;
            carList.push(userinput2);
            clear2 = car_space2.innerHTML = '';

            car_space3 = document.getElementById('gboard_q');
            car_s_ques3 = document.createTextNode('Enter your third car: ');
            car_i_box3 = document.createElement('input');
            car_i_box3.type = 'text';
            car_i_box3.id = 'car_i_box3';
            car_i_button3 = document.createElement('button');
            car_i_button3.type = 'button';
            car_i_button3.textContent = 'Submit';
            car_i_button3.id = 'car_i_button3';

            car_space3.appendChild(car_s_ques3);
            car_space3.appendChild(car_i_box3);
            car_space3.appendChild(car_i_button3);

            car_i_button3.addEventListener('click', function add_car3() {
                
                const userinput3 = document.getElementById('car_i_box3').value;
                const place_c3 = document.getElementById('car_3').innerHTML = userinput3;
                carList.push(userinput3);
                clear3 = car_space3.innerHTML = '';

                car_space4 = document.getElementById('gboard_q');
                car_s_ques4 = document.createTextNode('Enter your last car: ');
                car_i_box4 = document.createElement('input');
                car_i_box4.type = 'text';
                car_i_box4.id = 'car_i_box4';
                car_i_button4 = document.createElement('button');
                car_i_button4.type = 'button';
                car_i_button4.textContent = 'Submit';
                car_i_button4.id = 'car_i_button4';

                car_space4.appendChild(car_s_ques4);
                car_space4.appendChild(car_i_box4);
                car_space4.appendChild(car_i_button4);

                car_i_button4.addEventListener('click', function add_car4() {
                    userinput4 = document.getElementById('car_i_box4').value;
                    place_c4 = document.getElementById('car_4').innerHTML = userinput4;
                    carList.push(userinput4);
                    

                    clear4 = car_space4.innerHTML = '';

                    get_places();
                })


            })
            
        })
    });

};

function play_b() {

    
    playlabel = document.getElementById('playlabel');
    playbutton = document.getElementById('play_');
    
    playlabel.classList.add('hidden');
    playbutton.classList.add('hidden');

    get_cars();

};

