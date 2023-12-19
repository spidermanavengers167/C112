https://teachablemachine.withgoogle.com/models/rSl0nWPFC/
Webcam.set({
 width:350,
  height:300,
  image_format:'png',
  png_quality:90,
   })
 camera=document.getElementById("camera")
  Webcam.attach(camera)
  function take_snapshot(){
   Webcam.snap(function(data_uri){
 document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="captured_image">'        
     })
   }
 console.log("ml5.version",ml5.version)
classifier=ml5.imageClassifier("",modelLoaded)
 function modelLoaded(){
console.log("Model Has Been Loaded!")
   }
prediction_1=""
prediction_2=""
function speak(){
       synth=window.speechSynthesis
       speak_data_1="First Prediction Is..."+prediction_1
       speak_data_2="Second Prediction Is..."+prediction_2
       utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2)
       synth.speak(utterThis)
   }
   function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,gotResult)
}
function gotResult(error,results){
if(error){
    console.error(error)
}
else{
    console.log(results)
    document.getElementById("result_gesture_name").innerHTML=results[0].label
    document.getElementById("result_gesture_name1").innerHTML=results[1].label
    prediction_1=results[0].label
    prediction_2=results[1].label
    speak()
    if(results[0].label=="Good"){
        document.getElementById("update_gesture").innerHTML="&#x1f44d;"
    }
    if(results[0].label=="Amazing"){
        document.getElementById("update_gesture").innerHTML="&#x1f44c;"
    }
    if(results[0].label=="Peace"){
        document.getElementById("update_gesture").innerHTML="&#x270c;"
    }
    if(results[1].label=="Good"){
        document.getElementById("update_gesture1").innerHTML="&#x1f44d;"
    }
    if(results[1].label=="Amazing"){
        document.getElementById("update_gesture1").innerHTML="&#x1f44c;"
    }
    if(results[1].label=="Peace"){
        document.getElementById("update_gesture1").innerHTML="&#x270c;"
    }
}
}