import { Big } from 'big.js';


function operation(inputOne, inputTwo, sign) {
    const one = Big(inputOne);
    const two = Big(inputTwo);

    if (sign === "+") {
        return one.plus(two).toString();
    }
    if (sign === "-") {
        return one.minus(two).toString();
    }
    if (sign === "*") {
        return one.times(two).toString();
    }
    if (sign === "/") {
        try {
            return one.div(two).toString();
        }
        catch (err) {
            return "Error dividing by 0"
        }
    }
    if (sign === "%") {
        return one.mod(two).toString();
    }
    throw Error(`Unknown Operator ${sign}`)
}

export default operation;