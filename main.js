//https://storage.googleapis.com/tm-model/EEWqfeXnT/model.json
synth = window.speechSynthesis;

classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/EEWqfeXnT/model.json",modelReady)
function modelReady(){
    console.log("Modelo Pronto :D");
}
function classificar(){
    img = document.getElementById("selfie");
    classifier.classify(img, gotResults);
}
Webcam.set({
    width:300,height:300,imageformat:'png',pngQuality:90
})
camera = document.getElementById("webcam")
Webcam.attach(camera)
function TirarFoto(){
    Webcam.snap((uri)=>{
        document.getElementById("foto").innerHTML = "<img id='selfie'src="+uri+">"
    })
}
function gotResults(erro,result){
    if(erro){
        console.log(erro);
    }else{
        document.getElementById("mão1").innerHTML = result[0].label
        document.getElementById("mão2").innerHTML = result[1].label

        if(result[0].label=="Joinha"){
            document.getElementById("emoji1").innerHTML = "<span>&#"+128077+";</span>"
            speakData = "o gesto é joinha!";
            var utterThis = new SpeechSynthesisUtterance(speakData);
            synth.speak(utterThis)
        }
        if(result[0].label=="V"){
            document.getElementById("emoji1").innerHTML = "<span>&#"+9996+";</span>"
            speakData = "o gesto é V!";
            var utterThis = new SpeechSynthesisUtterance(speakData);
            synth.speak(utterThis)
        }
        if(result[0].label=="Mão"){
            document.getElementById("emoji1").innerHTML = "<span>&#"+9995+";</span>"
            speakData = "o gesto é Mão!";
            var utterThis = new SpeechSynthesisUtterance(speakData);
            synth.speak(utterThis)
        }
        if(result[1].label=="Joinha"){
            document.getElementById("emoji2").innerHTML = "<span>&#"+128077+";</span>"
            speakData = "ou gesto é joinha!";
            var utterThis = new SpeechSynthesisUtterance(speakData);
            synth.speak(utterThis)
        }
        if(result[1].label=="V"){
            document.getElementById("emoji2").innerHTML = "<span>&#"+9996+";</span>"
            speakData = "ou gesto é V!";
            var utterThis = new SpeechSynthesisUtterance(speakData);
            synth.speak(utterThis)
        }
        if(result[1].label=="Mão"){
            document.getElementById("emoji2").innerHTML = "<span>&#"+9995+";</span>"
            speakData = "ou gesto é Mão!";
            var utterThis = new SpeechSynthesisUtterance(speakData);
            synth.speak(utterThis)
        }
    
    }
}