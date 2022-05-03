let audio1 = new Audio('C_1.wav');
let audio2 = new Audio('Csharp_1.wav');
let audio3 = new Audio('D_1.wav');
let audio4 = new Audio('DSharp_1.wav');
let audio5 = new Audio('E_1.wav');
let audio6 = new Audio('F_1.wav');
let audio7 = new Audio('FSharp_1.wav');
let audio8 = new Audio('G_1.wav');
let audio9 = new Audio('GSharp_1.wav');
let audio10 = new Audio('A_1.wav');
let audio11 = new Audio('ASharp_1.wav');
let audio12 = new Audio('B_1.wav');


var noteaudio = 0;
let device;

//const deepai = require('deepai');
deepai.setApiKey('3a6fbac8-1085-48b3-a88d-13d2de46705a');

(async function() {
    var resp = await deepai.callStandardApi("text2img", {
            text: "piano",
    });
    console.log(resp);
    document.getElementById("wackyAI").src =resp.output_url;
})()



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
        colorKeys(65,124);
        noteaudio = 1;
        audioplay();
        b = 255; 
       
        document.getElementById('main').innerHTML="Note 64 is C";
        document.getElementById('note1').innerHTML="C";
        document.getElementById('note1').style.backgroundColor = `rgba(${b},${b},0,1)`;
        document.body.style.backgroundColor = `rgba(${b},${b},0,1)`;
        
    }
    if (note == 66){
        noteaudio = 2;
        audioplay();
        b = 255; 
        colorKeys(64,126);
        document.getElementById('main').innerHTML="Note 66 is C#";
        document.getElementById('note1').innerHTML="C#";
        document.getElementById('note1').style.backgroundColor = `rgba(${b},170,0,1)`;  
        document.body.style.backgroundColor = `rgba(${b},170,0,1)`;
    }
    if (note == 96){ // this is D
        noteaudio = 3;
        audioplay();
        b = 255; 
        colorKeys(97,72);
        document.getElementById('main').innerHTML="Note 96 is D";
        document.getElementById('note2').innerHTML="D";
        document.getElementById('note2').style.backgroundColor = `rgba(${b},0,0,1)`;  
        document.body.style.backgroundColor = `rgba(${b},0,0,1)`;
    }
    if (note == 98){ // this is D#
        noteaudio = 4;
        audioplay();
        b = 255; 
        colorKeys(99,106);
        document.getElementById('main').innerHTML="Note 98 is D#";
        document.getElementById('note2').innerHTML="D#";
        document.getElementById('note2').style.backgroundColor = `rgba(0,0,${b},1)`;  
        document.body.style.backgroundColor = `rgba(0,0,${b},1)`;
    }
    if (note == 60){ // this is E
        noteaudio = 5;
        audioplay();
        b = 255; 
        colorKeys(61,95);
        document.getElementById('main').innerHTML="Note 60 is E";
        document.getElementById('note3').innerHTML="E";
        document.getElementById('note3').style.backgroundColor = `rgba(${b},93,197,1)`;  
        document.body.style.backgroundColor = `rgba(${b},93,197,1)`;
    }
    if (note == 62){ // this is F
        noteaudio = 6;
        audioplay();
        b = 255; 
        colorKeys(63,17);
        document.getElementById('main').innerHTML="Note 62 is F";
        document.getElementById('note3').innerHTML="F";
        document.getElementById('note3').style.backgroundColor = `rgba(177,${b},48,1)`; 
        document.body.style.backgroundColor =  `rgba(177,${b},48,1)`;
    }
    if (note == 92){ // this is F#
        noteaudio = 7;
        audioplay();
        b = 255; 
        colorKeys(93,17);
        document.getElementById('main').innerHTML="Note 92 is F#";
        document.getElementById('note3').innerHTML="F#";
        document.getElementById('note3').style.backgroundColor = `rgba(168,0,${b},1)`; 
        document.body.style.backgroundColor =  `rgba(168,0,${b},1)`;
    }
    if (note == 94){ // this is G
        noteaudio = 8;
        audioplay();
        b = 255; 
        colorKeys(95,17);
        document.getElementById('main').innerHTML="Note 94 is G";
        document.getElementById('note4').innerHTML="G";
        document.getElementById('note4').style.backgroundColor = `rgba(${b},149,0,1)`;  
        document.body.style.backgroundColor = `rgba(${b},149,0,1)`;
    }
    if (note == 56){ // this is G#
        noteaudio = 9;
        audioplay();
        b = 255; 
        colorKeys(57,49);
        document.getElementById('main').innerHTML="Note 56 is G#";
        document.getElementById('note4').innerHTML="G#";
        document.getElementById('note4').style.backgroundColor = `rgba(182,59,212,1)`;  
        document.body.style.backgroundColor = `rgba(182,59,212,1)`;
    }
    if (note == 58){ // this is A
        noteaudio = 10;
        audioplay();
        b = 255; 
        colorKeys(59,49);
        document.getElementById('main').innerHTML="Note 58 is A";
        document.getElementById('note4').innerHTML="A";
        document.getElementById('note4').style.backgroundColor = `rgba(217,78,0,1)`;  
        document.body.style.backgroundColor = `rgba(217,78,0,1)`; 
    }
    if (note == 88){ // this is A#
        noteaudio = 11;
        audioplay();
        b = 255; 
        colorKeys(89,21);
        document.getElementById('main').innerHTML="Note 88 is A#";
        document.getElementById('note4').innerHTML="A#";
        document.getElementById('note4').style.backgroundColor = `rgba(155,222,0,1)`;  
        document.body.style.backgroundColor = `rgba(155,222,0,1)`; 
    }
    if (note == 90){ // this is B
        noteaudio = 12;
        audioplay();
        b = 255; 
        colorKeys(91,45);
        document.getElementById('main').innerHTML="Note 58 is B";
        document.getElementById('note1').innerHTML="B";
        document.getElementById('note1').style.backgroundColor = `rgba(93,0,255,1)`;  
        document.body.style.backgroundColor = `rgba(93,0,255,1)`; 
    }
    
/*if (note==64 && note==60 && note==92){
    document.getElementById('main').innerHTML="This is a C major chord"; 
    document.body.style.backgroundColor = `rgba(${b},${b},0,1)`;
}*/




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
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note1').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==66){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note1').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==96){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note2').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==98){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note2').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==60){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note3').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==62){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note3').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==92){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note3').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==94){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note4').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==56){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note4').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==58){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note4').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==88){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note4').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note==90){
            audiopause();
            document.getElementById("main").innerHTML = "Pick another note!";
            document.getElementById('note1').style.backgroundColor = 'rgba(255,255,255,1)' ; 
       
        }
        if (note ==84){
            document.getElementById('teste1m').style.backgroundColor = 'rgba(255,255,255,1)' ; 
        }
        if(note ==99){
            audiopause();
        }
    }
    function audioplay(){
        if(noteaudio==1){
            audio1.play();
        }
        if(noteaudio==2){
            audio2.play();
        }
        if(noteaudio==3){
            audio3.play();
        }
        if(noteaudio==4){
            audio4.play();
        }
        if(noteaudio==5){
            audio5.play();
        }
        if(noteaudio==6){
            audio6.play();
        }
        if(noteaudio==7){
            audio7.play();
        }
        if(noteaudio==8){
            audio8.play();
        }
        if(noteaudio==9){
            audio9.play();
        }
        if(noteaudio==10){
            audio10.play();
        }
        if(noteaudio==11){
            audio11.play();
        }
        if(noteaudio==12){
            audio12.play();
        }
    }
    function audiopause(){
        audio1.pause(); 
        audio2.pause(); 
        audio3.pause(); 
        audio4.pause(); 
        audio5.pause(); 
        audio6.pause(); 
        audio7.pause(); 
        audio8.pause(); 
        audio9.pause(); 
        audio10.pause(); 
        audio11.pause(); 
        audio12.pause(); 
        noteaudio=0;
        document.body.style.backgroundColor = `rgba(255,255,255,1)`;
    }





    function colorKeys(key, clr) {
        device && device.send([0x90, key, clr]); // note on
    }

    function clearAll(){
        for(let i=0; i<100; i++){
            colorKeys(i,0);
        }
    }