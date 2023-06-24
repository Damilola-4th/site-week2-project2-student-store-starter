import React from "react";
import "./ViewPurchases.css";
import { useState } from "react";
import ProductView from "../ProductView/ProductView";


const ViewPurchases = (props) => {
  let receipts;
  const [searchValue, setSearchValue] = useState("");

  const handleSearchValueChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
    updateKey(updatedKey, receipts);
  };
  return (
    <div className="view-purchases">
        <div className="search-bar">
        <input
          type="text"
          name="search"
          placeholder="Search"
          value={searchValue}
          onChange={(event) => handleSearchValueChange(event)}
        />
        <i className="material-icons"> search</i>
      </div>
      {props.viewAllReceipts.map(
        (receipt, index) => (
          (receipts = receipt),
          (index = index + 1),
          (
            <div className="receipt-info">
              <table>
                <tr>
                  <th>Name: </th>
                  <th>Email: </th>
                  <th>Item: </th>
                  <th>Amount: </th>
                  <th>Price: </th>
                  <th>Cost: </th>
                </tr>
                <tr>
                  <th>{receipts[index].name}</th>
                  <th>{receipts[index].email}</th>
                    {}
                  {console.log(receipt[index].shoppingCart[0].itemCount)}
                  <th>{receipts[index].shoppingCart[0].productName}</th>
                  <th>{receipts[index].shoppingCart[0].itemCount}</th>
                  <th>{receipts[index].shoppingCart[0].productPrice}</th>
                  <th>{receipts[index].shoppingCart[0].productCost}</th>
                </tr>
              </table>
            </div>
          )
        )
      )}
    </div>
  );
};
export default ViewPurchases;