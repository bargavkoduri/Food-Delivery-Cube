import { useContext, useEffect, useState } from "react";
import "./items.css";
import axios from "axios";
import { FoodContext } from "../../App";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DItems() {
  const { items, setItems, setCount, cart, setCart } = useContext(FoodContext);
  const [st, setSt] = useState("default");
  const [search,setSearch] = useState("")
  const [cls, setCls] = useState({
    alph: "filterF",
    clh: "filterF",
    chl: "filterF",
    rating: "filterF",
  });

  const vegOnly = () => {
    if (st === "default") {
      setItems(items.filter((item) => item.type === "Veg"));
      setSt("Veg");
      setCls({
        alph: "filterF",
        clh: "filterF",
        chl: "filterF",
        rating: "filterF",
      });
    } else {
      axios.get("http://localhost:5000/items").then((resp) => {
        setItems(resp.data);
        setSt("default");
        setCls({
          alph: "filterF",
          clh: "filterF",
          chl: "filterF",
          rating: "filterF",
        });
      });
    }
  };

  const addtocart = (id, name) => {
    if (cart.find((item) => item.id === id) === undefined) {
      toast.success(`${name} added to cart`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: "toast-message",
      });
      setCount((prev) => prev + 1);
      let obj = items.find((item) => item.id === id);
      obj.count = 1;
      setCart([...cart, obj]);
      // console.log(cart)
    } else {
      let li = cart;
      for (let i = 0; i < li.length; i++) {
        if (li[i].id === id) {
          li[i].count += 1;
          toast.success(`${name} added to cart ${li[i].count} times`, {
            position: toast.POSITION.BOTTOM_RIGHT,
            className: "toast-message",
          });
          break;
        }
      }
      setCart(li);
    }
  };

  const alph = () => {
    let li = items;
    li.sort((a, b) => (a.name > b.name ? 1 : -1));
    setItems(li);
    setCls({
      alph: "filterS",
      clh: "filterF",
      chl: "filterF",
      rating: "filterF",
    });
  };

  const clh = () => {
    let li = items;
    li.sort((a, b) => (a.price > b.price ? 1 : -1));
    setItems(li);
    setCls({
      alph: "filterF",
      clh: "filterS",
      chl: "filterF",
      rating: "filterF",
    });
  };

  const chl = () => {
    let li = items;
    li.sort((a, b) => (a.price < b.price ? 1 : -1));
    setItems(li);
    setCls({
      alph: "filterF",
      clh: "filterF",
      chl: "filterS",
      rating: "filterF",
    });
  };

  const rat = () => {
    let li = items;
    li.sort((a, b) => (a.rating < b.rating ? 1 : -1));
    setItems(li);
    setCls({
      alph: "filterF",
      clh: "filterF",
      chl: "filterF",
      rating: "filterS",
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/items")
      .then((resp) => setItems(resp.data));
  }, []);
  return (
    <>
      <div style={{ backgroundColor: "#171a29", height: "320px" }}>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div
                className="card topc"
                style={{ width: "18rem", marginTop: "50px", height: "220px" }}
              >
                <img
                  style={{ height: "250px" }}
                  alt="/"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXIe5j90250dUQM36wnlLa4oz5LWtEWF2ver4bjJt25K0vnDp2K23W-RZdPiOUf69Tsn4&usqp=CAU"
                />
              </div>
            </div>
            <div className="col-3">
              <div
                className="card topc"
                style={{ width: "18rem", marginTop: "50px", height: "220px" }}
              >
                <img
                  style={{ height: "250px" }}
                  alt="/"
                  src="https://imgs.search.brave.com/UFkGfzg483C3QtmnJODr0JZSMAxIpxAvCr8wWE2oRE8/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC44/TmlHS0U1dFdFakxj/RFpxOTdleWJ3SGFF/SyZwaWQ9QXBp"
                />
              </div>
            </div>
            <div className="col-3">
              <div
                className="card topc"
                style={{ width: "18rem", marginTop: "50px", height: "220px" }}
              >
                <img
                  style={{ height: "220px" }}
                  alt="/"
                  src="https://imgs.search.brave.com/iKmqrfJYaFcYZAYaRNx8mH76ZMZkG2R8s52j7f7SwUg/rs:fit:463:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5u/d3NVOW1mUGdfNmRh/TGMzOVdGVGFBQUFB/QSZwaWQ9QXBp"
                />
              </div>
            </div>
            <div className="col-3">
              <div
                className="card topc"
                style={{ width: "18rem", marginTop: "50px", height: "220px" }}
              >
                <img
                  style={{ height: "250px" }}
                  alt="/"
                  src="https://img.freepik.com/free-photo/misal-pav-is-popular-maharashtrian-street-food-usal-sprouts-curry-topped-with-onions-tomatoes-farsan-chutney_466689-74297.jpg?size=626&ext=jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "40px" }}>
        <div style={{ display: "inline-block" }}>
          <input type="text" placeholder="Search..." value={search} onChange={(e) => {
            setSearch(e.target.value)
          }}></input>
          {/* <button>
            <i className="bi bi-search"></i>
          </button> */}
        </div>
        <div style={{ display: "inline-block", marginLeft: "500px" }}>
          <div
            style={{ display: "inline-block" }}
            className={cls.alph}
            onClick={() => alph()}
          >
            <p style={{ marginBottom: "0px" }}>Alphabetical</p>
          </div>
          <div
            style={{ display: "inline-block", marginLeft: "50px" }}
            className={cls.clh}
            onClick={() => clh()}
          >
            <p style={{ marginBottom: "0px" }}>Cost: Low to High</p>
          </div>
          <div
            style={{ display: "inline-block", marginLeft: "50px" }}
            className={cls.chl}
            onClick={() => chl()}
          >
            <p style={{ marginBottom: "0px" }}>Cost: High to Low</p>
          </div>
          <div
            style={{ display: "inline-block", marginLeft: "50px" }}
            className={cls.rating}
            onClick={() => rat()}
          >
            <p style={{ marginBottom: "0px" }}>Rating</p>
          </div>
        </div>
        <hr />
      </div>

      <div className="container" style={{ paddingLeft: "30px" }}>
        <div style={{ marginLeft: "90%" }}>
          <label className="switch">
            <input
              type="checkbox"
              className="inputcheck"
              onChange={() => vegOnly()}
            />
            <span className="slider"></span>
          </label>
          <p
            style={{
              display: "inline-block",
              marginLeft: "10px",
              fontWeight: "200",
            }}
          >
            Veg Only
          </p>
        </div>
        <div className="row" style={{ marginBottom: "100px" }}>
          {items.map((item) => {
            if(item.name.toLowerCase().indexOf(search.toLowerCase()) >= 0){
            return (
              <div
                className="col-lg-3 col-md-6"
                key={item.id}
                style={{ marginTop: "40px" }}
              >
                <div
                  className="card itemcont"
                  style={{
                    width: "17rem",
                    height: "370px",
                    borderRadius: "0px",
                  }}
                >
                  <img
                    style={{
                      height: "150px",
                      width: "15.5rem",
                      marginLeft: "0.75rem",
                      marginTop: "2.5rem",
                      borderRadius: "0px",
                    }}
                    className="card-img-top"
                    src={item.src}
                    alt="/"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <small
                      style={{
                        color: "grey",
                        fontSize: "0.8rem",
                        position: "absolute",
                        top: "228px",
                      }}
                    >
                      {item.category}
                    </small>

                    <div
                      className={
                        item.rating >= 4
                          ? "good"
                          : item.rating >= 3
                          ? "ok"
                          : "bad"
                      }
                      style={{
                        position: "absolute",
                        top: "240px",
                        left: "206px",
                        padding: "4px",
                        paddingTop: "0px",
                        height: "25px",
                        borderRadius: "3px",
                      }}
                    >
                      <small>
                        <p
                          style={{
                            display: "inline-block",
                            marginBottom: "0px",
                            marginLeft: "2px",
                          }}
                        >
                          {item.rating}
                        </p>
                        <i
                          style={{ marginLeft: "10px", color: "white" }}
                          className="bi bi-star-fill"
                        ></i>
                      </small>
                    </div>

                    <div style={{ marginTop: "15px" }}>
                      <p style={{ fontWeight: "480" }}>{"₹" + item.price}</p>
                    </div>
                    <hr
                      style={{
                        width: "90%",
                        position: "absolute",
                        top: "255px",
                      }}
                    />
                    <button
                      className="btn"
                      style={{
                        position: "absolute",
                        top: "300px",
                        left: "30%",
                        backgroundColor: "#171a29",
                        color: "white",
                        borderRadius: "1px",
                        height: "35px",
                        paddingTop: "4px",
                      }}
                      onClick={() => addtocart(item.id, item.name)}
                    >
                      Add Item <i className="bi bi-cart3"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
            }
          })}
        </div>

        <ToastContainer />
      </div>
    </>
  );
}
