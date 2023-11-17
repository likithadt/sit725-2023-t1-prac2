function addTwoNumbers()
{
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    window.location = `/addTwoNumbers?number1=${number1}&number2=${number2}`;
}