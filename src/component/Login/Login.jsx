import { Link } from "react-router-dom";
import "./Login.css";
import { Button } from "@mui/material";

export default function Login() {
  return (
    <div className="login-component">
      <form action="" className="login">
        <h1>Login</h1>
        <div>
          <label>Email</label>
          <input type="text" placeholder="Enter you email" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" placeholder="Enter you email" />
        </div>
        <div>
          <Link to="./home" className="link">
            <Button variant="contained" className="btn">
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
}
