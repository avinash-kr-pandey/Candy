import React from "react";

function AddCart() {
  return (
    <section className="flex items-center flex-col ">
      <div className=" flex flex-col items-center lg:w-[60%] md:w-[80%] w-full">
        <article className="flex md:gap-16 gap-6  items-center border-2 shadow-md hover:shadow-blue-900 shadow-blue-400 justify-center w-full rounded-lg my-5 p-3 text-blue-900 font-semibold">
          <img src="./productsimg/1.webp" alt="" className="w-20 lg:w-32" />
          <div className="flex flex-col items-center justify-center">
            <p className="underline font-bold">Name</p>
            <p className=" text-center">Jet Puffed Gummy Peg Bag 5oz 12ct</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Quantity</p>
            <p>2</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Price</p>
            <p>$250</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Total</p>
            <p>$500</p>
          </div>
        </article>
        <article className="flex md:gap-16 gap-6  items-center border-2 shadow-md hover:shadow-blue-900 shadow-blue-400 justify-center w-full rounded-lg my-5 p-3 text-blue-900 font-semibold">
          <img src="./productsimg/1.webp" alt="" className="w-20 lg:w-32" />
          <div className="flex flex-col items-center justify-center">
            <p className="underline font-bold">Name</p>
            <p className=" text-center">Jet Puffed Gummy Peg Bag 5oz 12ct</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Quantity</p>
            <p>2</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Price</p>
            <p>$250</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Total</p>
            <p>$500</p>
          </div>
        </article>
        <article className="flex md:gap-16 gap-6 items-center border-2 shadow-md hover:shadow-blue-900 shadow-blue-400 justify-center w-full rounded-lg my-5 p-3 text-blue-900 font-semibold">
          <img src="./productsimg/1.webp" alt="" className="w-20 lg:w-32" />
          <div className="flex flex-col items-center justify-center">
            <p className="underline font-bold">Name</p>
            <p className=" text-center">Jet Puffed Gummy Peg Bag 5oz 12ct</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Quantity</p>
            <p>2</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Price</p>
            <p>$250</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Total</p>
            <p>$500</p>
          </div>
        </article>
        <article className="flex md:gap-16 gap-6 items-center border-2 shadow-md hover:shadow-blue-900 shadow-blue-400 justify-center w-full rounded-lg my-5 p-3 text-blue-900 font-semibold">
          <img src="./productsimg/1.webp" alt="" className="w-20 lg:w-32" />
          <div className="flex flex-col items-center justify-center">
            <p className="underline font-bold">Name</p>
            <p className=" text-center">Jet Puffed Gummy Peg Bag 5oz 12ct</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Quantity</p>
            <p>2</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Price</p>
            <p>$250</p>
          </div>
          <div className="flex flex-col items-center ">
            <p className="underline font-bold">Total</p>
            <p>$500</p>
          </div>
        </article>
        <div className="flex gap-5 mb-6 self-end">
          <button className="bg-blue-900 text-white rounded-md py-2 px-3">
            CONTINUE SHOPPING
          </button>
          <button className=" rounded-md border-2 border-blue-900 py-2 px-3">
            CHECK OUT
          </button>
        </div>
      </div>
    </section>
  );
}

export default AddCart;
