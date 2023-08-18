"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const productForm = ({
  _id,
  title,
  description: existingDescription,
  price: existingPrice,
}) => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const route = useRouter();

  useEffect(() => {
    if (title) {
      setProductName(title);
      setDescription(existingDescription);
      setPrice(existingPrice);
    }
  }, [title, existingDescription, existingPrice]);

  console.log("printing....");
  console.log(_id);

  const saveProduct = async (event) => {
    event.preventDefault();
    const productInfo = { title: productName, description, price };
    if (_id) {
      productInfo._id = _id;
      await axios.put("/api/products", productInfo);
    } else {
      await axios.post("/api/products", productInfo);
    }
    route.push("/products");
  };

  return (
    <form onSubmit={saveProduct}>
      <label htmlFor="productName">Product Name</label>
      <input
        type="text"
        name="productName"
        placeholder="product name"
        value={productName}
        onChange={(event) => setProductName(event.target.value)}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        placeholder="description(optional)"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <label htmlFor="price">Price</label>
      <input
        type="number"
        name="price"
        placeholder="price(in rupees)"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />

      <button type="submit">Save</button>
    </form>
  );
};

export default productForm;
