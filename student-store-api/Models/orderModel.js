const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the orders
const getAllOrders = async () => {
  return prisma.orders.findMany({
    include: {
      order_items: true,
    },
  });
};

//Function to get order by ID
const getOrderById = async (orderId) => {
  return prisma.orders.findUnique({
    where: { order_id: parseInt(orderId) },
    include: {
      order_items: true,
    },
  });
};

//Function to create a new prod
const createOrder = async (orderData) => {
  return prisma.orders.create({ data: orderData });
};

//Function to update prod
const updateOrder = async (orderId, orderData) => {
  return prisma.orders.update({
    where: { order_id: parseInt(orderId) },
    data: orderData,
  });
};

//Function to delete prod
const deleteOrder = async (orderId) => {
  return prisma.orders.delete({ where: { order_id: parseInt(orderId) } });
};
//Function to add items product
const addItemsInOrder = async (orderId, orderItemData) => {
  const product = await prisma.products.findUnique({
    where: { id: parseInt(orderItemData.product_id) },
  });
  const order = await prisma.orders.findUnique({
    where: { order_id: parseInt(orderId) },
  });

  await prisma.orders.update({
    where: { order_id: parseInt(orderId) },
    data: {
      total_price:
        parseFloat(order.total_price) +
        parseFloat(product.price) * parseInt(orderItemData.quantity),
    },
  });
  return prisma.order_items.get({
    data: {
      order_id: parseInt(orderId),
      product_id: parseInt(orderItemData.product_id),
      quantity: parseInt(orderItemData.quantity),
      price: parseFloat(product.price) * parseInt(orderItemData.quantity),
    },
  });
};

//Function to get order total
const getOrderTotal = async (order_id) => {
  const order =  await prisma.orders.findUnique({
     where: {order_id: parseInt(order_id)}
    })


  return order.total_price

};

//export the functions
module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
  addItemsInOrder,
  getOrderTotal,
};
