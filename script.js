//Clears the calculator screen.
function clearScreen(){
    document.getElementById("display-box").value="";
}

//Any number or opearator clicked will be appended to the display.
function display(numOroper){
    document.getElementById("display-box").value+=numOroper;
}

// This method will evaluate the expression on the display screen using the eval() of javascript.
function calculate(){
    var valueDisplayed=document.getElementById("display-box").value;

    var expressionEvaluate=eval(valueDisplayed);
    document.getElementById("display-box").value=expressionEvaluate;
}

//to calulate percentage separately
function calculatePercentage()
{
    var valueDisplayed=document.getElementById("display-box").value;

    var expressionEvaluate=eval(valueDisplayed);
    expressionEvaluate/=100;
    document.getElementById("display-box").value=expressionEvaluate; 
}
