import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";

const Verify = () => {
  const { token } = useParams();
  const { axios } = useAppContext();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyUser = async () => {
      try {
        const { data } = await axios.get(`/api/user/verify/${token}`);
        if (data.success) {
          toast.success("Email verified! You can now login.");
          navigate("/");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error("Something went wrong while verifying email.");
      }
    };
    verifyUser();
  }, [token, axios, navigate]);

  return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-lg text-gray-700">
        Verifying your email, please wait...
      </p>
    </div>
  );
};

export default Verify;
