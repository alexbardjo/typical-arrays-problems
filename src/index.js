exports.min = function min(array) {
    if (min.arguments.length === 0 || !(array.length) || array === Infinity) {
        return false;
    } else {
        // const arr = Array.from(arguments);
        return Math.min(...array);
    }

};

exports.max = function max(array) {
    if (max.arguments.length === 0 || !(array.length) || array === Infinity) {
        return false;
    } else {
        // const arr = Array.from(arguments);
        return Math.max(...array);
    }
};

exports.avg = function avg(array) {
    if (avg.arguments.length === 0 || !(array.length) || array === Infinity) {
        return false;
    } else {
        // const arr = Array.from(arguments);
        const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
        return sum / array.length;
    }
};
