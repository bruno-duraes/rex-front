function multiplyItems(arr, n) {
    let mock = [];
    for (let index = 0; index < n; index++) {
        arr.map(p => mock.push(p))
    }
    return mock
}

export function getMockOrders() {
    let orders = JSON.parse(localStorage.getItem('orders'));
    let mock = multiplyItems(orders, 12)
    return mock
}