import React from "react";
// {email, phone, order}
const OrderCard = ({ item }) => {
  console.log("props", item);
  const { email, phone, order } = item;
  console.log(email, phone, order);
  const items = Object.entries(order);
  return (
    <div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{email}</div>
          <div class="font-bold text-xl mb-2">{phone}</div>
          <div class="font-bold text-md mb-2">
            <ul>
              {items.map(([key, value]) => (
                <li key={key}>
                  {key} x {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
