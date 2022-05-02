let audio1 = new Audio('C_1.wav');
let audio2 = new Audio('C#_1.wav');
var noteaudio = 0;


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
        noteaudio = 1;
        audioplay();
        b = 255; 
        colorKeys(64,124);
        document.getElementById('main').innerHTML="Note 64 is C";
        document.getElementById('note1').style.backgroundColor = `rgba(${b},${b},0,1)`;
        
    }
    if (note == 66){
        noteaudio = 2;
        audioplay();
        b = 255; 
        colorKeys(64,124);
        document.getElementById('main').innerHTML="Note 66 is C#";
        document.getElementById('note1').innerHTML="C#";
        document.getElementById('note1').style.backgroundColor = `rgba(${b},170,0,1)`;
        
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
    }
    function audiopause(){
        audio1.pause(); 
        noteaudio=0;
    }