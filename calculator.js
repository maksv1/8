const OPERATION = {
    sem: '+',
    substract: '-',
    multiply: '*',
    divison: '/'
};

function calculate ({a, b, operation}) {
    let result = null;

    switch (operation) {
        case OPERATION.sum:
            result = sum(a, b);
            break;

        case OPERATION.substract:
            result = substract(a, b);
            break;

        case OPERATION.multiply:
            result = smultiply(a, b);
            break;

        case OPERATION.divison:
            result = divison(a, b);
            break;
    
        default:
            break;
    }

    return result;
}