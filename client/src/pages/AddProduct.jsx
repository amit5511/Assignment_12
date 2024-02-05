import React, { useState } from "react";
import {
  ChatIcon,
  CurrencyDollarIcon,
  AnnotationIcon,
  CollectionIcon,
  DatabaseIcon,
} from "@heroicons/react/outline";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState("");
  const [loading, setLoading] = useState(false);

  const URL = "http://localhost:5000/api/product/new";

  const createProductSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          description,
          category,
          stock,
        }),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log("Product created successfully:", responseData);
        setName("");
        setPrice("");
        setDescription("");
        setCategory("");
        setStock("");
      } 
    } catch (error) {
      console.error("Error creating product:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-md w-full p-6">
        <form
          className="space-y-4"
          onSubmit={createProductSubmitHandler}
        >
          <h1 className="text-2xl font-bold text-center">Create Product</h1>

          <div className="flex items-center space-x-2">
            <ChatIcon className="h-6 w-6 text-gray-500" />
            <input
              type="text"
              placeholder="Product Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 flex-grow"
            />
          </div>

          <div className="flex items-center space-x-2">
            <CurrencyDollarIcon className="h-6 w-6 text-gray-500" />
            <input
              type="number"
              placeholder="Price"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 flex-grow"
            />
          </div>

          <div className="flex items-center space-x-2">
            <AnnotationIcon className="h-6 w-6 text-gray-500" />
            <textarea
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="1"
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 flex-grow"
            ></textarea>
          </div>

          <div className="flex items-center space-x-2">
            <CollectionIcon className="h-6 w-6 text-gray-500" />
            <select
              onChange={(e) => setCategory(e.target.value)}
              value={category}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 flex-grow"
            >
              <option value="">Choose Category</option>
              <option value="shoe">Shoe</option>
              <option value="tshirt">T-Shirt</option>
              <option value="camera">Camera</option>
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <DatabaseIcon className="h-6 w-6 text-gray-500" />
            <input
              type="number"
              placeholder="Stock"
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="border-b-2 border-gray-300 focus:outline-none focus:border-blue-500 flex-grow"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full"
          >
            {loading ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

