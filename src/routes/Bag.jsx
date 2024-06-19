import React from "react";
import { useSelector } from "react-redux";
import Bagsummary from "../components/BagSummary";
import Bagitem from "../components/Bagitem";

function Bag() {
  const items = useSelector((state) => state.items);
  const bagItems = useSelector((state) => state.bag);

  // Debug: log the state data
  console.log("Items:", items);
  console.log("Bag Items:", bagItems);

  const finalItems = items.filter((item) => bagItems.includes(item.id));

  return (
    <main>
      <div className="bag-page">
        {finalItems.map((item) => (
          <Bagitem key={item.id} item={item} />
        ))}
        <Bagsummary />
      </div>
    </main>
  );
}

export default Bag;
