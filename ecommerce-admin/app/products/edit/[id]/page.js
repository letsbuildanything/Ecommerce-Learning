"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import ProductForm from "../../../../components/ProductForm";
import axios from "axios";

const page = () => {
  const [productDetail, setProductDetail] = useState([]);
  const path = usePathname();
  const id = path.split("/products/edit/")[1];

  useEffect(() => {
    if (id) {
      axios
        .get(`/api/products?id=${id}`)
        .then((response) => setProductDetail(response.data));
    }
  }, [id]);
  console.log({...productDetail[0]})
  return (
    <>
      <h1>Edit Product</h1>
      {productDetail && <ProductForm {...productDetail[0]}/>}
    </>
  );
};

export default page;
