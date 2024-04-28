document.getElementById("submit").addEventListener("click", Parachustist);

function Parachustist(){
    let dt = Number(document.getElementById("stepSize").value);
    let m = Number(document.getElementById("mass").value);
    let cd = Number(document.getElementById("dragCoefficient").value);

    let ti = 0;
    let tf = 2;
    let vi = 0;

    console.log(`Step Size: ${dt.toFixed(2)}`);
    console.log(`Mass: ${m.toFixed(2)}`);
    console.log(`Drag Coefficient: ${cd.toFixed(2)}`);

    Euler(dt, ti, tf, vi, m, cd);
}

function Euler(stepSize, intialTime, finalTime, initialVelocity, mass, dragCoefficient){
    const element = document.getElementById("results");
    const para = document.createElement("p");

    console.log(`Step Size: ${stepSize.toFixed(2)}`);
    console.log(`Initial Time: ${intialTime.toFixed(2)}`);
    console.log(`Final Time: ${finalTime.toFixed(2)}`);
    console.log(`Initial Velocity: ${initialVelocity.toFixed(2)}`);
    console.log(`Mass: ${mass.toFixed(2)}`);
    console.log(`Drag Coefficient: ${dragCoefficient.toFixed(2)}`);

    let time = intialTime;
    let step = stepSize;
    let velocity = initialVelocity;
    while(time < finalTime){
        if (time + stepSize > finalTime){
            step = finalTime - time;
        }
        differentialRateofChange = velocityDelta(velocity, mass, dragCoefficient);
        velocity = velocity + differentialRateofChange * step;

        const node = document.createTextNode(`Time: ${time.toFixed(2)} Velocity: ${velocity.toFixed(2)}`);
        para.appendChild(node);
        para.appendChild(document.createElement("br"));

        console.log(`Time (loop): ${time.toFixed(2)}`);
        console.log(`Velocity (loop): ${velocity.toFixed(2)}`);
        time = time + step;
    }
    console.log(`Time: ${time.toFixed(2)}`);
    console.log(`Velocity: ${velocity.toFixed(2)}`);
      
    
    element.appendChild(para);
}

function velocityDelta(velocity, mass, dragCoefficient){
    const G = 9.81;
    return (G - (dragCoefficient / mass) * velocity);
}


