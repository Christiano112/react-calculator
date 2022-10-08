import "./calculator.css"

function Calculator() {

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


    return (
        <div className="calculator">
            <input type="text" readOnly />

            <div className="box-row">
                {calculatorInputs.map((calculator) => (
                    <div keys={calculator.id} className="calculator-box">
                        <p style={{ color: calculator.color, backgroundColor: calculator.bg, fontWeight: calculator.font }}>{calculator.data}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Calculator;