const order = {
    customer: 'somebody',
    address: 'the address'
};

if (!order.customer.address?.city) {
  console.log('City is required');
}

console.log(order);