export function getMockOrders() {
    let orders = JSON.parse(localStorage.getItem('orders'));
    return orders
}