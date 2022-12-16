import React from "react";
import { useDispatch } from "react-redux";
import { user } from "../redux/Action";
import { useState } from "react";

export default function Login() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const changed = (e) => {
    setName(e.target.value);
  };
  return (
    <div className="login">
      <div className="loginleft">
        <h4 style={{ margin: "10px" }}>Log in</h4>
        <input
          type="text"
          className="form-control"
          placeholder="User Name"
          style={{ marginBottom: "10px" }}
          onChange={changed}
        />
        <input
          type="password"
          className="form-control"
          placeholder="password"
          style={{ marginBottom: "10px" }}
        />
        <button
          type="button"
          className="btn btn-success "
          onClick={() => dispatch(user(name))}
          style={{ width: "100%" }}
        >
          submit
        </button>

        <p>
          {" "}
          Don't have a account?<a href="#">click here</a>
        </p>
      </div>
      <div className="loginright">
        <div className="contentlogin">
          <h4>Lorem Ipsum</h4>
          <p>
            <strong>Lorem Ipsum</strong> is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
