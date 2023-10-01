import { useState } from "react";

const BMICalculator = () => {
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const calculateBMI = () => {
        const weightInPounds = parseFloat(weight);
        const heightInInches = parseFloat(height / 100);
        const calculatedBMI = (weightInPounds / (heightInInches * heightInInches));
        
        setBMI(calculatedBMI.toFixed(2));
    };

    return ( 
        <div className="bmi">
            <h2>BMI Calculator</h2>
            <div>
                <label>Weight (kg):</label>
                <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div>
                <label>Height (cm):</label>
                <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                />
                </div>
            <button onClick={calculateBMI}>Calculate BMI</button>
            {bmi && <p>Your BMI is: {bmi}</p>}
        </div>
     );
}
 
export default BMICalculator;