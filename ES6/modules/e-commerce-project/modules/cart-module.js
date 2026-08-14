let arr = [];

export const add = (product) => {
    const found = arr.find(p => p.id === product.id);
    if (found) {
        found.quantity += 1;
    } else {
        product.quantity = 1;
        arr.push(product);
    }
    return arr.length;
}

export const remove = (product) => {
    arr = arr.filter((item) => item.id !== product.id);
}

export const showCart = () => {
    return arr;
}