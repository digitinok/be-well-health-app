import DynamicPlot from "../components/DynamicPlot"

export default function bmi() {

  
    return (
        <div>
          <h1>BMI Calculator</h1>
          <p>Height (in cm)</p>
          <input type="text" />
          <p>Weight (in Kg)</p>
          <input type="text"/>
          
          <DynamicPlot />

        </div>
    );
  }