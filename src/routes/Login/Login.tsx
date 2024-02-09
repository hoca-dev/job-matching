import styled from "styled-components";
import { LoginComponent } from "../../components";
import { createClient } from "@supabase/supabase-js";
import googleIcon from "../../assets/images/icons8-google.svg";

const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF6a3lxdGxqc2NvY2d1ZGxsaHNsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDczNzQwMTcsImV4cCI6MjAyMjk1MDAxN30.tBDQODLt3Yv5QMcC5k82KRG7kGVeosfhrHZNROEXSac";

const SUPABASE_URL = "https://azkyqtljscocgudllhsl.supabase.co";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const LoginRouteContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .google-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    font-size: 2rem;
    padding: 1rem 3rem;
    position: fixed;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
  }
`;

export const LoginRoute = () => {
  const googleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: "http://localhost:5173/dashboard",
      },
    });
  };
  return (
    <LoginRouteContainer>
      <button className="google-btn" onClick={googleLogin}>
        <img src={googleIcon} alt="google icon" />
        <span>Continue with Google</span>
      </button>
      <LoginComponent />
    </LoginRouteContainer>
  );
};
