import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsActionCreator } from "../../Actions/productsAction";

function Cart() {
  const dispatch = useDispatch();
  var cartData = useSelector((store) => {
    return store.productsReducer.addtocart;
  });
  const removecart = (data) => {
    dispatch(productsActionCreator("removecart", data));
  };
  return (
    <div className="container">
      {cartData.length > 0 ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: "column",
          }}
        >
          {cartData.map((cart) => {
            return (
              <div
                key={cart.id}
                style={{
                  padding: "50px",
                  textAlign: "center",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
                }}
              >
                <div className="col-2">
                  <img src={cart.image} width={170} height={170} />
                </div>
                <div className="col-2">
                  <h5>{cart.title}</h5>
                </div>
                <div className="col-2">
                  <p>$ {cart.price}</p>
                </div>
                <div className="col-2">
                  <p>{cart.category}</p>
                </div>
                <div className="col-2">
                  <button
                    onClick={() => {
                      removecart(cart);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2
          style={{
            color: "red",
            textAlign: "center",
            fontSize: "32px",
            marginTop: "100px",
          }}
        >
          Cart is Empty
        </h2>
      )}
    </div>
  );
}

export default Cart;
