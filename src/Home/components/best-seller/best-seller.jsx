import React, {useEffect, useState} from "react";
import { connect } from "react-redux";
import "./best-seller.css";
import {
  getBestBooks,
  getProducts,
} from "../../../redux/products/products.action";
import { NavLink } from "react-router-dom";
import { AddToCart } from "../../../redux/cart/cart.action";
import { Helpers } from "../../../shared/helpers";
import {CheckIcon} from "@heroicons/react/solid";

let bestBooks = [];

const BestSeller = (props) => {

  useEffect(() => {
    props.getBestBooks();
  }, [props.cartItems]);

  const [addedToCart, setAddedToCart] = useState(false);
  const [itemAddedId, setItemAddedId] = useState(null);
  const [checkIfInCart, setCheckIfInCart] = useState([]);

  const checkCart = () => {
    const inCart = Helpers.checkIfInCart(props.cartItems ? props.cartItems : [], itemAddedId);
    if (inCart) {
      setCheckIfInCart([
        ...checkIfInCart,
        itemAddedId
      ])
    }
  };

  useEffect(() => {
    checkCart();
    setAddedToCart(false);
  }, [itemAddedId, addedToCart]);

  bestBooks = props.bestSellerBooks;

  return (
    <section className="w-11/12 mx-auto my-5">
      <h1 className="py-6 text-3xl italic font-serif">
        Our Booksellers Recommend
      </h1>
      <aside className="w-11/12 grid grid-cols-1 lg:grid-cols-4 text-center gap-2 mx-auto w-11/12 ">
        <div className="hidden lg:grid grid-cols-1 gap-2">
          <div className="max-w-sm bg-transparent rounded-lg rounded">
            <div className=" group relative overflow-hidden">
              <NavLink
                to={`/c/${bestBooks[0]?.categoryId?.url}/${bestBooks[0]?._id}`}
              >
                <img
                  className=" h-94 w-full rounded"
                  src={
                    bestBooks.length
                      ? bestBooks[0].thumbnail.length
                        ? bestBooks[0].thumbnail[0]
                        : bestBooks[0].image
                      : ""
                  }
                  alt="product image"
                />
              </NavLink>
              {
                bestBooks.length && bestBooks[0].stock
                    ?
                    checkIfInCart.includes(bestBooks[0]._id) ?
                        <button className="w-11/12 flex justify-center items-center bg-white text-green-500 font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                          Already Added <CheckIcon width={20} height={20}></CheckIcon>
                        </button>
                        :
                        <button className="w-11/12 bg-white hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 "
                                onClick={()=> {
                                  props.AddToCart(bestBooks[0]);
                                  setItemAddedId(bestBooks[0]._id);
                                }}>
                          Quick Add
                        </button>
                    :
                    <button className="w-11/12 text-white bg-red-500 font-semibold py-2 px-2 border border-red-500 rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                      Out Of Stock
                    </button>
              }
            </div>
            <div className="px-5 pb-5">
              <NavLink
                to={`/c/${bestBooks.length && bestBooks[0].categoryId.url}/${
                  bestBooks.length && bestBooks[0]._id
                }`}
              >
                <h5 className="text-2xl  font-semibold py-2 tracking-tight text-gray-900">
                  {bestBooks.length && bestBooks[0].name}
                </h5>
              </NavLink>
              <div className="flex justify-center mt-2.5 mb-5">
                {Helpers.displayRating(bestBooks.length && bestBooks[0].rating)}
              </div>
              <div>
                <p>
                  {bestBooks.length && bestBooks[0].description.slice(0, 300)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="grid col-span-1 lg:col-span-3 gap-2 mx-auto text-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  mx-auto">
            {bestBooks.map((book, i) => {
              return (
                <div
                  className={`${
                    i == 0 ? "lg:hidden" : ""
                  } px-4 max-w-sm bg-transparent rounded-lg rounded mb-4`}
                >
                  <div className=" group relative overflow-hidden">
                    <NavLink to={`/c/${book.categoryId.url}/${book._id}`}>
                      <img
                        className="object-cover h-60  w-full  rounded-t-lg"
                        src={bestBooks.length && book.image}
                        alt="product image"
                      />
                    </NavLink>

                    {
                      book.stock
                          ?
                          checkIfInCart.includes(book._id) ?
                              <button className="w-11/12 flex justify-center items-center bg-white text-green-500 font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                                Already Added <CheckIcon width={20} height={20}></CheckIcon>
                              </button>
                              :
                              <button className="w-11/12 bg-white hover:bg-theme text-theme-hover font-semibold hover:text-background py-2 px-2 hover:border-transparent rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 "
                                      onClick={()=> {
                                        props.AddToCart(book);
                                        setItemAddedId(book._id);
                                      }}>
                                Quick Add
                              </button>
                          :
                          <button className="w-11/12 text-white bg-red-500 font-semibold py-2 px-2 border border-red-500 rounded absolute bottom-0 right-2/4 translate-x-2/4 translate-y-full group-hover:-translate-y-1 hover:translate-y-0 transition ease-in-out duration-300 ">
                            Out Of Stock
                          </button>
                    }
                  </div>
                  <div className="pb-5">
                    <NavLink to={`/c/${book.categoryId.url}/${book._id}`}>
                      <h5 className="flex justify-center items-start text-xl font-semibold tracking-tight text-gray-900 h-14 my-5 ">
                        {bestBooks.length && book.name.slice(0, 25)}
                      </h5>
                    </NavLink>
                    <a href="#" className="underline text-gray-500"></a>
                    <div className="flex justify-center mt-2.5 mb-5">
                      {Helpers.displayRating(bestBooks.length && book.rating)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </aside>
    </section>
  );
};

let mapStateToProps = (state) => {
  return {
    products: state.products.products,
    bestSellerBooks: state.products.bestSellerBooks,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => dispatch(getProducts()),
    getBestBooks: () => dispatch(getBestBooks()),
    AddToCart: (book) => dispatch(AddToCart(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);
