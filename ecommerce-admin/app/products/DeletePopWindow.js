import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

const DeletePopWindow = ({
  isDeleteEnabled,
  setIsDeleteEnabled,
  productInfo: { title, _id },
}) => {
  // console.log(productInfo);
  const router = useRouter();

  const deleteProduct = async () => {
    await axios.delete(`/api/products?id=${_id}`);
    setIsDeleteEnabled(false);
    // router.push('/products')
    console.log('del component')
    router.push('/products');
  };

  return (
    <div className="absolute z-1 w-full h-full left-0 top-0 bg-black/20">
      <div className="absolute w-fit left-1/2 top-10 bg-blue-900 text-white px-4 py-2">
        Do you really want to delete {title}.
        <br />
        <div className="flex justify-center gap-2 mt-2">
          <button
            className="px-3 py-1 bg-red-900"
            onClick={() => deleteProduct()}
          >
            Yes
          </button>
          <button
            className="px-3 py-1 bg-green-900"
            onClick={() => setIsDeleteEnabled(false)}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeletePopWindow;
