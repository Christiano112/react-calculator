import operation from './Operate'

// Check if Input is a number
const checkNumber = (num) => {
    return !!num.match(/[0-9]+/);
}

function evaluate(obj, input) {

    // Clears the screen
    if (input === "AC") {
        return {
            total: null,
            next: null,
            operate: null,
        }
    }

    if (input === "DEL") {
        return {
            total: obj.next,
            next: null,
            operation: input
        }
    }

    if (checkNumber(input)) {
        if (input === "0" && obj.next === "0") {
            return {};
        }
        if (obj.operate) {
            if (obj.next) {
                return {...obj, next: obj.next + input}
            }
            return {...obj, next: input}
        }
        if (obj.next) {
            return {
                next: obj.next + input,
                total: null
            }
        }
        return {
            next: input,
            total: null
        };
    }

    if (input === ".") {
        if (obj.next) {
            if (obj.next.includes(".")) {
                return {...obj};
            }
            return {...obj, next: `${obj.next}.`}
        }
        if (obj.operate) {
            return {next: "0."}
        }
        if (obj.total) {
            if (obj.total.includes(".")) {
                return {}
            }
            return {total: `${obj.total}.`}
        }
        return {total: "0."};
    }

    if (input === "=") {
        if (obj.next && obj.operate) {
            return {
                total: operation(obj.total, obj.next, obj.operate),
                next: null,
                operate: null
            }
        }
        return {}
    }

    if (!obj.next && obj.total && !obj.operate) {
        return {...obj, operate: input}
    }

    if (obj.operate) {
        if (obj.total && !obj.next) {
            return {...obj, operate: input}
        }
        return {
            total: operation(obj.total, obj.next, obj.operate),
            next: null,
            operate: input
        }
    }

    if (!obj.next) {
        return {operate: input}
    }

    return {
        total: obj.next,
        next: null,
        operate: input
    }
}

export default evaluate;