var tileCountX = 8;
var tileCountY = 8;
var tileWidth;
var tileHeight;
var imageCount = tileCountX * tileCountY;
var currentImage = 0;
var gridX = 0;
var gridY = 0;
let audio = new Audio('PettyAllegations(mp3).wav');
console.log(navigator); 

function setup() {
 createCanvas(1024, 1024);
  background(0);

  tileWidth = width / tileCountX;
  tileHeight = height / tileCountY;
}

function draw() {
var posX = tileWidth * gridX;
var posY = tileHeight * gridY;
}

if (navigator.requestMIDIAccess){
navigator.requestMIDIAccess().then(success, failure);

}

function failure(){
    console.log('could not connect MIDI');
}

function updateDevices(event){
    console.log(event);
}

function success(midiAccess){
    midiAccess.addEventListener('statechange',updateDevices);

    const inputs = midiAccess.inputs;
    for (var output of midiAccess.outputs.values()){
        device = output;

        console.log('Out device selected', device);
    }
    //console.log(inputs); 
    inputs.forEach((input) => {
        input.addEventListener('midimessage', handleInput);
    })

    }





function colorKeys(key, clr) {
    device && device.send([0x90, key, clr]); //note on
}


function clearAll(){
    for(let i=0; i<100; i++){
        colorKeys(i,0);
    }
}
/*
function colorAll(){
    for ()
}
*/




    function handleInput(input){
       
        const command = input.data[0];
        const note =input.data[1];
        const velocity = input.data[2];

      console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`); 
   
    
switch (command){
case 144:
    if(velocity>0){
        noteOn(note);
    } else{
        noteOff(note);
    }
    break; 
    case 128:
}
    }

function noteOn(note){

console.log('note:${note} //on'); 

if (note == 64){
    b = 255; 
colorKeys(65,127);
    document.getElementById('teste1m').innerHTML="Note 64 is On";
    document.getElementById('teste1m').style.backgroundColor = `rgba(0,0,${b},1)`;

}

if (note ==99){
   audioplay();
    /*b = 200 ;
    let p5_ = new p5();
    console.log(p5_.map(0.5,0,1,0,100));*/
}
if (note ==97){
    b = 100; 
    document.getElementById('teste1m').style.backgroundColor = 'rgba(0,0,${b},1)'
}


}

function noteOff(note){
    console.log('note:${note} //off');
    if (note==64){
        document.getElementById("teste1m").innerHTML = "Back to Normal";
        document.getElementById('teste1m').style.backgroundColor = 'rgba(255,255,255,1)' ; 
   
    }
    if (note ==84){
        document.getElementById('teste1m').style.backgroundColor = 'rgba(255,255,255,1)' ; 
    }
    if(note ==99){
        audiopause();
    }
}







function audioplay(){
    audio.play();
}
function audiopause(){
    audio.pause(); 
}


//const deepai = require('deepai');
/*deepai.setApiKey('3a6fbac8-1085-48b3-a88d-13d2de46705a');

(async function() {
    var resp = await deepai.callStandardApi("text2img", {
            text: "Piano",
    });
    console.log(resp);
    console.log(resp.output_url);
    document.getElementById("wackyAI").src =resp.output_url;
})()

*/
