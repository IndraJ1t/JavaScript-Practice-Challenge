async function zeroError(x, y) {
    try {
        if (y !== 0) {
            const result = await x / y
            console.log(result);
        }
        else {
            throw new Error("Cannot be divided by ZERO");
        }
    }
    catch (error) {
        console.error(error);
    }
}
zeroError(6, 0);