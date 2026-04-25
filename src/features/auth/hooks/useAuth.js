import { useContext } from "react";
import { AuthContext } from "../authContext.jsx";
import { loginUser, logoutUser, registerUser } from "../services/auth.api.js";

export const useAuth = () => {
  const context = useContext(AuthContext);
  const { user, setUser, loading, setLoading } = context;

  const handleLogin = async ({ email, password }) => {
    //  loading screen ko true krna hook layer ka kam and
    //  loading screen dekhana kaam he UI layer ka
    setLoading(true);
    try {
      const loginData = await loginUser({ email, password });
      //  data ke ander backend s user bhi aa raha he;
      setUser(loginData.user);
    } catch (err) {
      console.log(`error in handle login ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async ({ username, email, password }) => {
    setLoading(true);
    try {
      const registerData = await registerUser({ username, email, password });

      setUser(registerData.newUser);
    } catch (err) {
      console.log(`error in handle register ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logoutUser();
      setUser(null);
    } catch (err) {
      console.log(`error in handle logout ${err}`);
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, handleLogin, handleRegister, handleLogout };
};
