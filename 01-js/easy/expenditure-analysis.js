/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let out = [];
  for (let i = 0; i < transactions.length; i++) {
    let res = out.findIndex((item) => item.category === transactions[i].category);
    if (res > -1)
      out[res] = { ...out[res], totalSpent: out[res].totalSpent + transactions[i].price };
    else out.push({ category: transactions[i].category, totalSpent: transactions[i].price });
  }
  return out;
}

module.exports = calculateTotalSpentByCategory;
