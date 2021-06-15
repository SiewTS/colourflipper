// values for 3 types of colours swapping
const rgb = ["#ff0000","#008000","#0000ff"];
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const bw = [0,"F"];
// types selection
const rgbbtn = document.getElementById("rgb-color");
const randbtn = document.getElementById("random-color");
const bwbtn = document.getElementById("bw-color");
// elements
const btn = document.getElementById("btn");
const color = document.getElementById("cl");
const type = document.getElementById("type-chosen");

// Default is RGB
let i=0;
if(i<rgb.length){
    btn.addEventListener('click',function(){
        console.log(i);
        color.textContent = rgb[i];
        document.body.style.backgroundColor = rgb[i];
        i++;
        if(i == 3){
            i = 0;
        }
    });
}

rgbbtn.addEventListener('click', function(){
    type.innerHTML = "RGB";
    let i=0;

    if(i<rgb.length){
        btn.addEventListener('click',function(){
            color.textContent = rgb[i];
            document.body.style.backgroundColor = rgb[i];
            i++;
            // once reach final element, set back to 1st
            if(i == 3){
                i = 0;
            }
        });
    }
});

// Random
randbtn.addEventListener('click', function(){
    type.innerHTML = "Random";
    btn.addEventListener('click',function(){
        let hexColor = '#';
        // a loop that runs 6 times to generate a random hex num
        for(let j=0; j<6; j++){
            hexColor += hex[getRandomNum()];
        }
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor;
    });
    // random number function
    function getRandomNum () {
        return Math.floor(Math.random() * hex.length);
    }
});

// Black White
bwbtn.addEventListener('click', function(){
    type.innerHTML = "Black-White";
    let i=0;
    let hexColor = '#';
    if(i<bw.length){
        btn.addEventListener('click',function(){
            // generate hex code
            for(let j=0 ; j<6 ; j++){
                hexColor += bw[i];
            }

            color.textContent = hexColor;
            document.body.style.backgroundColor = hexColor;
            i++;
            hexColor = '#';
            // once reach final element, set back to 1st
            if(i == 2){
                i = 0;
            }
        });
    }
});




