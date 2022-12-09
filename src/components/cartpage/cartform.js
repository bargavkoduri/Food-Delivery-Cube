import { useContext, useRef } from "react";
import { FoodContext } from "../../App";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cartform(){
    const {con,setCart,setCount,setShow} = useContext(FoodContext)
    const navigate = useNavigate();


    function ValidateEmail(x) {
      let atposition = x.indexOf("@");
      let dotposition = x.lastIndexOf(".");
      if (
        atposition < 1 ||
        dotposition < atposition + 2 ||
        dotposition + 2 >= x.length
      ) {
        email.current.focus();
        email.current.style["box-shadow"] = "0 0 10px red";
        email.current.style["background"] =
          "url(https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg) no-repeat 95% 50%";
        setTimeout(() => {
          email.current.style["box-shadow"] = "";
          email.current.style["background"] = "";
        }, 5000);
        return true;
      } else {
        return false;
      }
    }

    const helperfun = (x, num) => {
      if ((x.length > 0 && x.length < num) || x.length === 0) return true;
      if (x.length > 0) {
        for (let i = 0; i < num; i++) {
          if (x[i] < '0' || x[i] > '9') return true;
        }
        return false;
      }
    };

    const handler = () => {
        let flag = 0;
        if(name.current.value === ""){
            flag = 1;
            name.current.focus();
            name.current.style["box-shadow"] = "0 0 10px red";
            name.current.style["background"] =
              "url(https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg) no-repeat 95% 50%";
            setTimeout(() => {
              name.current.style["box-shadow"] = "";
              name.current.style["background"] = "";
            }, 5000);
        }

        if(ValidateEmail(email.current.value)){
            flag = 1;
            email.current.focus();
            email.current.style["box-shadow"] = "0 0 10px red";
            email.current.style["background"] =
              "url(https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg) no-repeat 95% 50%";
            setTimeout(() => {
              email.current.style["box-shadow"] = "";
              email.current.style["background"] = "";
            }, 5000);
        }

        if(helperfun(phone.current.value,10)){
            flag = 1;
            phone.current.focus();
            phone.current.style["box-shadow"] = "0 0 10px red";
            phone.current.style["background"] =
              "url(https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg) no-repeat 95% 50%";
            setTimeout(() => {
              phone.current.style["box-shadow"] = "";
              phone.current.style["background"] = "";
            }, 5000);
        }

        if(helperfun(pincode.current.value,6)){
            flag = 1;
            pincode.current.focus();
            pincode.current.style["box-shadow"] = "0 0 10px red";
            pincode.current.style["background"] =
              "url(https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg) no-repeat 95% 50%";
            setTimeout(() => {
              pincode.current.style["box-shadow"] = "";
              pincode.current.style["background"] = "";
            }, 5000);
        }

        if(address.current.value === ""){
            flag = 1;
            address.current.focus();
            address.current.style["box-shadow"] = "0 0 10px red";
            address.current.style["background"] =
              "url(https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg) no-repeat 95% 90%";
            setTimeout(() => {
              address.current.style["box-shadow"] = "";
              address.current.style["background"] = "";
            }, 5000);
        }

        if(state.current.value === ""){
            flag = 1
            state.current.focus();
            state.current.style["box-shadow"] = "0 0 10px red";
            state.current.style["background"] =
              "url(https://assets.digitalocean.com/labs/icons/exclamation-triangle-fill.svg) no-repeat 95% 50%";
            setTimeout(() => {
              state.current.style["box-shadow"] = "";
              state.current.style["background"] = "";
            }, 5000);
        }

        if(flag === 0){
            toast.success(`Order placed successfully \n will reach you shortly`, {
              position: toast.POSITION.TOP_CENTER,
              className: "toast-message",
            });
            setTimeout(() => {
                navigate("/")
                 setCount(0);
                 setCart([]);
                 setShow(false);
            }, 2000);
        }
    }



    const name = useRef()
    const email = useRef()
    const phone = useRef()
    const state = useRef()
    const pincode = useRef()
    const address = useRef()

    return (
    <>
      <div className="row" style={{ backgroundColor: "#e9ecee" }} ref={con}>
        <h2 style={{ textDecoration: "underline", marginLeft: "30px" }}>
          Shipping Address
        </h2>
        <div
          style={{
            backgroundColor: "white",
            height: "650px",
            width: "750px",
            marginLeft: "30%",
            marginBottom: "50px",
            marginTop: "50px",
            padding: "3%",
            paddingTop : "60px",
            paddingLeft: "60px",
          }}
        >
          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-3">
              <h6>Name</h6>
            </div>
            <div className="col-7">
              <input type="text" className="form-control" ref={name}></input>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-3">
              <h6>Email</h6>
            </div>
            <div className="col-7">
              <input type="email" className="form-control" ref={email}></input>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-3">
              <h6>Phone Number</h6>
            </div>
            <div className="col-7">
              <input type="text" className="form-control" ref={phone}></input>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-3">
              <h6>Address</h6>
            </div>
            <div className="col-7">
              <textarea rows="5" className="form-control" ref={address}></textarea>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-3">
              <h6>Pincode</h6>
            </div>
            <div className="col-7">
              <input type="text" className="form-control" ref={pincode}></input>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row" style={{ marginBottom: "20px" }}>
            <div className="col-3">
              <h6>State</h6>
            </div>
            <div className="col-7">
              <input type="text" className="form-control" ref={state}></input>
            </div>
            <div className="col-2"></div>
          </div>

          <div className="row">
            <button
              style={{
                backgroundColor: "#171a29",
                color: "white",
                marginTop: "20px",
                marginBottom: "20px",
              }}
              className="btn"
              onClick={() => handler()}
            >
                Order Now</button>
          </div>
          <p style={{color : "grey"}}>Pay the amount at the time of the delivery</p>
        </div>
      </div>
      <ToastContainer/>
    </>
    );
}