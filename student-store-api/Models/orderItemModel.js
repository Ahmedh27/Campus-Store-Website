const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Function gets all the orders
const getAllOrderItems = async () => {
  return prisma.order_items.findMany();
};







//Function to get order by ID
const getOrderItemById = async (orderId) => {
  return prisma.order_items.findUnique({ where: { order_item_id: parseInt(orderId) } });
};

//Function to create a new prod
const createOrderItem = async (orderItemData) => {
  return prisma.order_items.create({ data: {
    order_id: parseInt(orderItemData.order_id),
    product_id: parseInt(orderItemData.product_id),
    quantity: parseInt(orderItemData.quantity),
    price: parseFloat(orderItemData.price),
  } });
};

// //Function to update prod
// const updateOrderItem = async (orderId, orderItemData) => {
//   return prisma.order_items.update({
//     where: { order_item_id: parseInt(orderId) },
//     data: orderItemData,
//   });
// };

// //Function to delete prod
// const deleteOrderItem = async (orderId) => {
//   return prisma.orders.delete({ where: { order_item_id: parseInt(orderId) } });
// };

//export the functions
module.exports = {
  getAllOrderItems,
  getOrderItemById,
  createOrderItem,
//   updateOrderItem,
//   deleteOrderItem,
};
