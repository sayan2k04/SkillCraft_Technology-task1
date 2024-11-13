function convertTemp() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const scaleFrom = document.getElementById("scaleFrom").value;
    const scaleTo = document.getElementById("scaleTo").value;
    let result;
  
    if (isNaN(inputTemp)) {
      result = "Please enter a valid number.";
    } else {
      if (scaleFrom === "Celsius") {
        result = scaleTo === "Fahrenheit" 
          ? (inputTemp * 9/5) + 32
          : scaleTo === "Kelvin" 
            ? inputTemp + 273.15 
            : inputTemp;
      } else if (scaleFrom === "Fahrenheit") {
        result = scaleTo === "Celsius" 
          ? (inputTemp - 32) * 5/9 
          : scaleTo === "Kelvin" 
            ? (inputTemp - 32) * 5/9 + 273.15 
            : inputTemp;
      } else if (scaleFrom === "Kelvin") {
        result = scaleTo === "Celsius" 
          ? inputTemp - 273.15 
          : scaleTo === "Fahrenheit" 
            ? (inputTemp - 273.15) * 9/5 + 32 
            : inputTemp;
      }
      result = `Result: ${result.toFixed(2)}° ${scaleTo}`;
    }
  
    document.getElementById("result").textContent = result;
  }
  