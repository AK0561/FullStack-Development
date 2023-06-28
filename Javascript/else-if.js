function testSize(num) 
{
    if(num<5) {return "Tiny"}
    else if(num<10) {return "Small"}
    else if(num<15) {return "Medium"}
    else if(num<20) {return "Large"}
    else if(num>=20) {return "Huge"}
    else{}
    return "Change Me";
  }
  console.log(testSize(7))

function performMath(number1, number2, operation) 
{
    if (operation === '+') {
      return number1 + number2;
    } else if (operation === '*') {
      return number1 * number2;
    } else {
      return 'Invalid operation';
    }
  }
  console.log(performMath(4,6,'*'))