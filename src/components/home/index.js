import "./home.css";
import video from "../../assets/video.mp4"
import Navbar from "../orderpage/navbar"
import Footer from "../orderpage/Footer"
import {Link} from "react-router-dom"

export default function Home() {
return (
  <div className="Home">
    <Navbar />
    <div className=" home-cont">
      <video className="headervid" src={video} autoPlay loop muted />
    </div>
    <div>
      <div
        style={{
          backgroundColor: "white",
          height: "320px",
          marginBottom: "50px",
          marginTop: "20px",
        }}
      >
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
                  src="https://imgs.search.brave.com/Aq5WxJHIaQ2xPDgWrIp0LDZzVt0CfdE0rdbRVYHI6eo/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5f/em5CV1IyRjNGNzNk/MTJWZnZrOVdRSGFG/aiZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
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
                  src="https://imgs.search.brave.com/00ilgP9T9gVQaVGEZyIVjgogTWgGd-oFDd40mXYiaXo/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/VFZlS1lVMTAxTUY1/UXloaGs3bFhBSGFF/NyZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
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
                  src="https://imgs.search.brave.com/xWve_BQApxLL0om25y2JMrsL9uykH733vml0ud9ZsDg/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5q/aVgya0VQRjB0b29W/eFRweWVMTXB3SGFF/SyZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
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
                  src="https://imgs.search.brave.com/0EUe8Oz4zCX8qn517bU1Z9msRt9AJe864_ffIVhowqk/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4t/dUZHczlLUUR3VXps/LXZoeV9uNm9RSGFG/aiZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "320px",
          marginBottom: "100px",
        }}
      >
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
                  src="https://imgs.search.brave.com/NoaJYWXZ-k4v_GzbcEri7rb3ZHGz9loE_fL7g6ZM_mg/rs:fit:948:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5O/ZUdnMWxZXzlBcWdH/QW1BTUtmUjhRSGFE/dCZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
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
                  src="https://imgs.search.brave.com/7dhQJEpbX1hFlxtaw7GL0NVUk5tyzoPq3q62A0Kvgu4/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5w/Nm9LZjF6Yy1fVVg3/QWdodnItU2d3SGFF/OCZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
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
                  src="https://imgs.search.brave.com/hLCnvfYyzUZL2ju23P3OGYd_ccKDw3E7HxQrLiP_7Wg/rs:fit:722:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5L/blQ1VjhhMFJyZTF4/OUNOZm85ejZBSGFF/MyZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
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
                  src="https://imgs.search.brave.com/aeSYzMgJ8uXODsw9R1k0s4NY8pIgorD4Rp9Mfs4XHgY/rs:fit:1140:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5E/Wlk2U0IzSWJTVlRa/WmkyVW45NVZRSGFE/RiZwaWQ9QXBp"
                />
              </div>
              <div className="card-body">
                <Link to="/foods">
                  <button
                    className="btn-btn-home"
                    style={{
                      backgroundColor: "#171a29",
                      marginLeft: "100px",
                      marginTop: "30px",
                    }}
                  >
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);
}