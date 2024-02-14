const customers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', location: { city: 'New York', country: 'USA' } },
    { id: 2, name: 'Bob', email: 'bob@example.com', location: { city: 'Paris', country: 'France' } },
    { id: 3, name: 'Zafrina', email: 'zaf@example.com', location: { city: 'Rome', country: 'Italy' } },
    { id: 4, name: 'Charlie', email: 'charlie@example.com', location: { city: 'Berlin', country: 'Germany' } },
    { id: 5, name: 'David', email: 'david@example.com', location: { city: 'London', country: 'UK' } },
  ];
  
  const orders = [
    { orderId: 101, customerId: 1, product: 'Laptop', quantity: 1, price: 1200 },
    { orderId: 102, customerId: 2, product: 'Smartphone', quantity: 2, price: 800 },
    { orderId: 103, customerId: 3, product: 'Tablet', quantity: 1, price: 500 },
    { orderId: 104, customerId: 4, product: 'Headphones', quantity: 1, price: 150 },
    { orderId: 105, customerId: 5, product: 'Camera', quantity: 1, price: 900 },
  ]
  

//task1
const emailArray=customers.map(customer=>customer.email)
console.log("\n emails of customers:",emailArray);

////task2
const filterArray=orders.filter(order=>order.quantity*order.price>1000)
console.log("\n all orders with a total value greater than $1000:",filterArray);

//task3

const findCustomer=(nm)=>{
  const customerObject=customers.find(customer=>customer["name"]===nm)
  return customerObject
}
console.log("\n object of customer:",findCustomer("Alice"))


//task4
const findIndexOfOrder=(id)=>{
  return orders.findIndex(order=>order["orderId"]===id)
}
console.log(findIndexOfOrder(102));

//task 5
//checking

const checking=(country)=>{
  return customers.some(customer=>customer["location"]["country"]===country)
}
console.log(checking("USA"));


//task6

const findingCustomerName=(customerId)=>{
  const foundCustomer=customers.find(customer => customerId===customer.id)
  return foundCustomer.name
}

const summaary=orders.forEach(({orderId, customerId, quantity, product, price} )=> {
  console.log(`Order ${orderId} by ${findingCustomerName(customerId)}: ${quantity} x ${product} for ${price}$ each.`);
});

//task7-sorting
const sortedArray=[...customers].sort((a,b)=>{ //by using rest operator, i copied the array and used it directly
    const x=a.name;
    const y=b.name;
    if(x>y){ 
        return 1
    }
    if(x<y){
        return -1
    }
    return 0
})
console.log(sortedArray);