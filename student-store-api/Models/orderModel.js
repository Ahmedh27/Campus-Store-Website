const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the orders
const getAllOrders = async () => {
  return prisma.orders.findMany({
    include: {
      order_items: true,
    }
  });
};

//Function to get order by ID
const getOrderById = async (orderId) => {
  return prisma.orders.findUnique({ where: { order_id: parseInt(orderId) }, include: {
    order_items: true
  } });
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

//export the functions
module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
