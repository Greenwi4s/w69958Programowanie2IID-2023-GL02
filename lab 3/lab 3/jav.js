function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");}
function addNumbers() {
            const firstNumber = parseInt(document.getElementById("firstNumber").value);
            const secondNumber = parseInt(document.getElementById("secondNumber").value);
            const result = firstNumber + secondNumber;
            
            document.getElementById("result").innerHTML = `Wynik: ${result}`;
        }
 function showTime() {
            const date = new Date();
            const hours = date.getHours().toString().padStart(2, "0");
            const minutes = date.getMinutes().toString().padStart(2, "0");
            const seconds = date.getSeconds().toString().padStart(2, "0");
            
            document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
        }
        
        setInterval(showTime, 1000);
        
        showTime();
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
function create{

}
function correct{
    
}