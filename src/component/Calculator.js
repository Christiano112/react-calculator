import { React, useState } from "react";
import "./calculator.css";
import evaluate from "./Evaluate";


const Calculator = () => {

    const calculatorInputs = [
        {
            id: 1,
            data: "AC",
            bg: "#616161",
            color: "#A5A5A5"
        },
        {
            id: 2,
            data: "DEL",
            bg: "#616161",
            color: "#A5A5A5"
        },
        {
            id: 3,
            data: "%",
            bg: "#005DB2",
            color: "#29A8FF"
        },
        {
            id: 4,
            data: "/",
            bg: "#005DB2",
            color: "#29A8FF"
        },
        {
            id: 5,
            data: "7",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 6,
            data: "8",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 7,
            data: "9",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 8,
            data: "*",
            bg: "#005DB2",
            color: "#29A8FF"
        },
        {
            id: 9,
            data: "4",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 10,
            data: "5",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 11,
            data: "6",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 12,
            data: "-",
            bg: "#005DB2",
            color: "#29A8FF"
        },
        {
            id: 13,
            data: "1",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 14,
            data: "2",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 15,
            data: "3",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 16,
            data: "+",
            bg: "#005DB2",
            color: "#29A8FF"
        },
        {
            id: 17,
            data: "0",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 18,
            data: "00",
            bg: "#303136",
            color: "#29A8FF"
        },
        {
            id: 19,
            data: ".",
            bg: "#303136",
            color: "#29A8FF",
            font: "900"
        },
        {
            id: 20,
            data: "=",
            bg: "#005DB2",
            color: "#29A8FF",
            font: "900"
        },
    ]

    const [result, setResult] = useState({
        total: undefined,
        next: undefined,
        operate: undefined
    });

    let value = 0;

    if (result.next) {
        value = result.next;
    } else if (result.total) {
        value = result.total;
    }

    const newResult = (value) => {
        const newState = evaluate(result, value)
        setResult(newState)
    }

    const clickHandler = (e) => {
        const input = e.target.innerText;
        newResult(input);
    }

    return (
        <div className="calculator">
            <div className="result">{value}</div>

            <div className="box-row">
                {calculatorInputs.map((calculator) => (
                    <div key={calculator.id} className="calculator-box">
                        <button
                            style={{ color: calculator.color, backgroundColor: calculator.bg, fontWeight: calculator.font }}
                            onClick={clickHandler}
                            type="button">
                            {calculator.data}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )


}

export default Calculator;

// function operation(inputOne, inputTwo, sign) {
//     const one = Big(inputOne);
//     const two = Big(inputTwo);

//     if (sign === "+") {
//         return one.plus(two).toString();
//     }
//     if (sign === "-") {
//         return one.minus(two).toString();
//     }
//     if (sign === "*") {
//         return one.times(two).toString();
//     }
//     if (sign === "/") {
//         try {
//             return one.plus(two).toString();
//         }
//         catch (err) {
//             return "Error dividing by 0"
//         }
//     }
//     if (sign === "%") {
//         return one.mod(two).toString();
//     }
//     throw Error(`Unknown Operator ${sign}`)
// }