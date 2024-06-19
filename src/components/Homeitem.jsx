import React from "react";
import { IoBagHandleSharp } from "react-icons/io5";
import { IoBagRemove } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../store/BagSlice";

function Homeitem({ items }) {
  //For selecting elements from bag
  const bagItems = useSelector((store) => store.bag);

  //To dispatch action to store
  const dispatch = useDispatch();
  const handelAddToBag = () => {
    dispatch(addToBag(items.id));
  };
  const handelRemoveBag = () => {
    dispatch(removeFromBag(items.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={items.image} alt="item image" />
      <div className="rating">
        {items.rating.stars} ⭐ | {items.rating.count}
      </div>
      <div className="company-name">{items.company}</div>
      <div className="item-name">{items.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {items.current_price}</span>
        <span className="original-price">Rs {items.original_price}</span>
        <span className="discount">({items.discount_percentage}% OFF)</span>
      </div>
      {/* Serching for elemnts in shopping cart */}
      {bagItems.indexOf(items.id) >= 0 ? (
        <button
          className="btn-add-bag btn btn-outline-danger"
          onClick={handelRemoveBag}
        >
          <IoBagRemove size={20} className="mb-1" /> Remove From Cart
        </button>
      ) : (
        <button
          className="btn-add-bag btn btn-outline-info"
          onClick={handelAddToBag}
        >
          <IoBagHandleSharp size={20} className="mb-1" /> Add To Cart
        </button>
      )}
    </div>
  );
}

export default Homeitem;
