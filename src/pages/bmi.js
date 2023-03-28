let calcBMI =(Weight, height) => {
  // prevent submitting event. prevent Default{}
    if (weight===0 || height===0) {
      alert ("please enter a valid weight and height")
      
    }
  else{
    return (weight/(height/100)**2).toFixed(2)
    
  }
}

export default function bmi() {
  return (
    <div>
      <h1>BMI Calculator</h1>
      <p>Height (in cm)</p>
      <input type="text" />
      <p>Weight (in Kg)</p>
      <input type="text" />
      
      
      




    </div>
  );
}