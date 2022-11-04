import React from "react";
import Product from "../components/product";
import data from "../data/products.json";

const test = () => {
  return (
    // <ul className="profile-list">
    //   {data.map((content, index) => (
    //     <li key={index}>
    //       <span>
    //         <strong>Item:</strong> {content.description}
    //       </span>
    //     </li>
    //   ))}
    // </ul>
    <div>
      <Product data={data} />
    </div>
  );
};

export default test;
