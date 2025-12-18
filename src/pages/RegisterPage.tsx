import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext";


export default function RegisterPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [terms, setTerms] = useState(false);
  const {register} = useAuth();
  const navigate = useNavigate();
 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    console.log("SUBMIT CLICKED");

    console.log("password === confirm?", password === passwordConfirm);
    console.log("terms accepted?", terms);

    if (password !== passwordConfirm) {
      console.log("STOP: passwords do not match");
      return;
    }

    if (!terms) {
      console.log("STOP: terms not accepted");
      return;
    }
    console.log("CALLING register()");

    await register({
        name, email, password
    });

    console.log("REGISTER OK, NAVIGATING");

    navigate("/login");
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Create your account</h1>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="auth-field">
            <label htmlFor="passwordConfirm">Confirm password</label>
            <input
              id="passwordConfirm"
              type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
            />
          </div>

          <div className="auth-checkbox">
            <input
              id="terms"
              type="checkbox"
              checked={terms}
              onChange={(e) => setTerms(e.target.checked)}
            />
            <label htmlFor="terms">I agree to terms</label>
          </div>

          <button className="auth-button" type="submit">
            Register
          </button>
        </form>

        <nav className="auth-footer">
          <Link to="/login">Log in to your existing account</Link>
        </nav>
      </div>
    </main>

  );
}
