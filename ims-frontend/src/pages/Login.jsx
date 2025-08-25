import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../store/slices/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const  token= useSelector(s=>s.auth.token)
  const navigate = useNavigate();

  useEffect(() => {
    if (token) navigate("/dashboard", { replace: true });
  }, [token, navigate]);

  function fakeLogin() {
    dispatch(
      loginSuccess({
        user: { id: 1, name: "demo_user", email: "r@r.com" },
        token: "dev_token",
        role: "ADMIN",
      })
    );
  }

  return (
    <div>
      <h2>Login(sub)</h2>
      <p>Temp Login </p>
      <button onClick={fakeLogin}>Fake Login</button>
    </div>
  );
}
