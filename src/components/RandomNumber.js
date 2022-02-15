import { useState } from "react";

function RandomNumber() {

    const [randomText, setRandomText] = useState(0);
    const [disable, setDisable] = useState(false);
    var i = 0;
    

    function generateRandom() {

        setDisable(true);
        setRandomText(Math.floor((Math.random() * 50)) + 1);
        i++;
        if(i === 10)
        {
            setDisable(false);
            return;
        }

        var millisecondsToWait = 400;
        setTimeout(function() {
            // Whatever you want to do after the wait
            generateRandom();
           
        }, millisecondsToWait);
    }

    return (
        <div className="random">
            <p>
                <label>GENERATE RANDOM NUMBER BETWEEN 1 and 50:</label>
                <p className="randomText">{randomText}</p>
            </p>
            <button disabled={disable} className="btn btn-dark" onClick={generateRandom}>Generate Random Number</button>
        </div>
    );
}

export default RandomNumber; 