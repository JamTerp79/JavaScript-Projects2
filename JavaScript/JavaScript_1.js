var c= document.getElementById("graphics");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,0,200,0);
grd.addColorStop(0,"red");
grd.addColorStop(1,"blue");

ctx.fillStyle = grd;
ctx.fillRect(10,10,150,80);
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();

function animal_Function()   {
    var animal_Output;
    var Animals = document.getElementById("animal_input").value;
    var animal_String = " is a FANTASTIC animal!";
    switch(Animals) {
        case "Snake":
            animal_Output = "Snake" + animal_String;
        break;
        case "Spider":
            animal_Output = "Spider" + animal_String;
        break;
        case "Lizard":
            animal_Output = "Lizard" + animal_String;
        break;
        case "Fish":
            animal_Output = "Fish" + animal_String;
        break;
        case "Monkey":
            animal_Output = "Monkey" + animal_String;
        break;
        case "Cat":
            animal_Output = "Cat" + animal_String;
        break;
        case "Dog":
            animal_Output = "Dog" + animal_String;
        break;
        case "Bird":
            animal_Output = "Bird" + animal_String;
        break;
        case "Alligator":
            animal_Output = "Alligator" + animal_String;
        break;
        case "Bat":
            animal_Output = "Bat" + animal_String;
        break;
        default:
            animal_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = animal_Output;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text HAS changed!";
}
