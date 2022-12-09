import { useContext, useEffect, useState } from "react";
import { FoodContext } from "../../App";
import { MDBTable } from "mdb-react-ui-kit";
import Typewriter from "typewriter-effect";


export default function CartFun() {
  const [dfee, setDfee] = useState(0);
  const [total, setTotal] = useState(0);
  const { cart, setCart,setCount,setShow,con,show } = useContext(FoodContext);

  useEffect(() => {
    if (cart.length !== 0) {
      setDfee(40);
    }
    setTotal(caltotal());
  }, [cart]);

  const caltotal = () => {
    return cart.reduce((acc, curr) => {
      return acc + curr.price * curr.count;
    }, 0);
  };

  const increment = (id) => {
    let li = [...cart];
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        li[i].count += 1;
        break;
      }
    }
    setCart(li);
  };

  const decrement = (id) => {
    let li = cart;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === id) {
        li[i].count -= 1;
        break;
      }
    }
    li = li.filter((l) => l.count > 0);
    if (li.length === 0) {
      setDfee(0);
      setShow(false)
    }
    setCart(li);
    setCount(li.length)
  };

  const fun = () => {
    setShow(true)
  }
  
  useEffect(() => {
    if(show === true){
      con.current.scrollIntoView()
    }
  },[show])

  return (
    <div style={{ backgroundColor: "#e9ecee", height: "85vh" }}>
      <div className="row">
        <div
          style={{
            width: "800px",
            height: "550px",
            backgroundColor: "white",
            marginTop: "40px",
            marginLeft: "350px",
            overflowY: "scroll",
            overflowX : "hidden"
          }}
        >
          {
           cart.length !== 0 ? 
          <MDBTable align="middle" style={{ marginTop: "20px" }}>
            <thead>
              <tr>
                <th scope="col">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name</th>
                <th scope="col">&nbsp;&nbsp;&nbsp;Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <div style={{ display: "inline-block" }}>
                        <img
                          src={item.src}
                          style={{
                            width: "85px",
                            height: "60px",
                            marginBottom: "30px",
                          }}
                          alt="/"
                        />
                      </div>
                      <div
                        style={{
                          display: "inline-block",
                          marginLeft: "30px",
                        }}
                      >
                        <p style={{ fontWeight: "400", marginBottom: "0px" }}>
                          {item.name}
                        </p>
                        <p style={{ fontWeight: "200", marginBottom: "0px" }}>
                          {item.category}
                        </p>
                      </div>
                    </td>

                    <td>
                      <button
                        style={{
                          display: "inline-block",
                          marginRight: "15px",
                          backgroundColor: "#ff726f",
                          height: "30px",
                          width: "30px",
                          borderRadius: "5px",
                          border: "0px",
                        }}
                        onClick={() => decrement(item.id)}
                      >
                        -
                      </button>
                      <p style={{ display: "inline-block" }}>{item.count}</p>
                      <button
                        style={{
                          display: "inline-block",
                          marginLeft: "15px",
                          backgroundColor: "#90EE90",
                          height: "30px",
                          width: "30px",
                          borderRadius: "5px",
                          border: "0px",
                        }}
                        onClick={() => increment(item.id)}
                      >
                        +
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </MDBTable> : 
          <div className="container" style={{fontWeight : "400",color : "dark-grey",fontSize : "30px",textAlign : "center",marginTop : "25%"}}>
            <Typewriter onInit={(typewriter) => {
              typewriter
              .typeString("Cart's Empty")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Add something to your cart to display up here")
              .start();
            }}/>
          </div> }
        </div>
        <div
          style={{
            width: "400px",
            height: "700px",
            backgroundColor: "white",
            marginTop: "40px",
            marginLeft: "100px",
            overflowY : "scroll",
            overflowX : "hidden"
          }}
        >
          <h3
            style={{
              textAlign: "center",
              fontSize: "1.5rem",
              fontWeight: "450",
              marginTop: "25px",
            }}
          >
            Bill Details
          </h3>
          <div className="row" style={{ paddingTop: "30px" }}>
            {cart.map((item) => {
              return (
                <div
                  className="col-12"
                  style={{ marginBottom: "15px", marginLeft: "25px" }}
                  key={item.id}
                >
                  <div style={{ display: "inline-block", width: "250px" }}>
                    <p style={{ display: "inline-block" }}>
                      {item.name + ` x ${item.count}`}
                    </p>
                  </div>
                  <p
                    style={{
                      display: "inline-block",
                      fontWeight: "300",
                    }}
                  >
                    {`₹` + item.count * item.price}
                  </p>
                </div>
              );
            })}
            <hr style={{ width: "80%", marginLeft: "40px" }} />
            <div
              style={{
                width: "250px",
                marginLeft: "25px",
                display: "inline-block",
              }}
            >
              <h6 style={{ fontSize: "0.9rem", display: "inline-block" }}>
                Items Total
              </h6>
            </div>
            <p
              style={{
                display: "inline-block",
                fontWeight: "300",
                width: "30px",
              }}
            >
              ₹{total}
            </p>
            <div
              style={{
                width: "250px",
                marginLeft: "25px",
                display: "inline-block",
              }}
            >
              <h6 style={{ fontSize: "0.9rem", display: "inline-block" }}>
                Delivery Fee
              </h6>
            </div>
            <p
              style={{
                display: "inline-block",
                fontWeight: "300",
                width: "30px",
              }}
            >
              ₹{dfee}
            </p>
            <div
              style={{
                width: "250px",
                marginLeft: "25px",
                display: "inline-block",
              }}
            >
              <h6 style={{ fontSize: "0.9rem", display: "inline-block" }}>
                Taxes (sgst and cgst)
              </h6>
            </div>
            <p
              style={{
                display: "inline-block",
                fontWeight: "300",
                width: "30px",
              }}
            >
              ₹{0.05 * total}
            </p>
          </div>
          <hr
            style={{
              height: "4px",
              border: "none",
              color: "black",
              backgroundColor: "black",
            }}
          />
          <div
            style={{
              width: "250px",
              marginLeft: "25px",
              display: "inline-block",
            }}
          >
            <h6
              style={{
                fontSize: "1rem",
                display: "inline-block",
                fontWeight: "700",
                marginTop: "25px",
              }}
            >
              Total
            </h6>
          </div>
          <p
            style={{
              display: "inline-block",
              fontWeight: "300",
              width: "30px",
              fontWeight: "700",
            }}
          >
            ₹{1.05 * total + dfee}
          </p>

          <div>
            <button className="btn" disabled={cart.length === 0 ? true : false} style={{ backgroundColor: "#171a29",color : "white",marginLeft : "26%",marginTop : "20px",marginBottom : "50px" }}
            onClick={() => fun()}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
