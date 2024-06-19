import { useSelector } from "react-redux";

function Bagsummary({}) {
  const BagItemIds = useSelector((state) => state.bag);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => BagItemIds.includes(item.id));
  //Calculation of fees and charges
  const Convenience_Fee = 99; //const fee
  let totalItem = finalItems.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;

  finalItems.forEach((element) => {
    totalMRP += element.original_price;
    totalDiscount += element.original_price - element.current_price;
  });

  finalPayment = totalMRP - totalDiscount + Convenience_Fee;
  return (
    <>
      <div className="bag-summary">
        <div className="bag-details-container">
          <div className="price-header">PRICE DETAILS {totalItem} Items</div>
          <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">
              -₹{totalDiscount}
            </span>
          </div>
          <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹99</span>
          </div>
          <hr />
          <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
          </div>
        </div>
        <button className="btn-place-order">
          <div className="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
}

export default Bagsummary;
