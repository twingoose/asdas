function setup()
{
canvas = createCanvas(500,500);
canvas.center();
background("white");
canvas.mouseReleased(classifyCanvas);
synth = window.speechSynthesis;
}


function clearCanvas()
{

background("white")
}

function preload()
{
classifier = ml5.imageClassifier('DoodleNet');

}

function draw()
{
strokeWeight(13);
stroke(0);
if (mouseIsPressed) {
    line(pmouseX,pmouseY,mouseX,mouseY);
}
}


function classifyCanvas()
{
    classifier.classify(canvas,gotResult);

}

function gotResult(error,results)
{
if (error) { console.error(error);
}
console.log(results);
document.getElementById('label').innerHTML = 'label:' + results[0].label;
document.getElementById('confidence').innerHTML= 'confidence' + Math.round(results[0].confidence*100) + '%'

UtterThis = new SpeechSynthesisUtterance(result[0].label);
synth.speak(utterThis);
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = 0;
            // timer = duration; // uncomment this line to reset timer automatically after reaching 0
        }
    }, 1000);
}

window.onload = function () {
    var time = 15 / 1, // your time in seconds here
        display = document.querySelector('#safeTimerDisplay');
    startTimer(time, display);

    
}


 main()
{
    /*i have tried using both single and double quotation marks */

    array1[4]='stiches';
    array1[0]='sweater';
    array1[1]='sword';
    array1[2]='rain';
    array1[3]='bottle';
    array1[4]='stiches';
    array1[5]='battleaxe';
    array1[6]='pizza';
    printf("%s",array1[0]);
}