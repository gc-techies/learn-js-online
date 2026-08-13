let arr = [];

export const add = (product) => {
    arr.push(product);
}

export const remove = (product) => {
    arr = arr.filter((item) => item.id !== product.id);
}

export const showCart = () => {
    return arr;
}