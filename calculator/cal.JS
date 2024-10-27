// Function to append value to display
function appendValue(value){
    document.getElementById('display').value+=value;
}

// Function to clear display
function clearDisplay(){
    document.getElementById('display').value="";
}

// Function to calculate the result
function calculate(){
    try{
        document.getElementById('display').value=eval(document.getElementById('display').value);
    } catch (error){
        document.getElementById('display'.value)='Error0';
    }
}
//eval function performs the calculations based on the string in the display.
