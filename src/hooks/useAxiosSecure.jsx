import axios from "axios";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const axiosSecure = axios.create({
  baseURL: "https://sums-apis.rpi.gov.bd",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { SignOutUser } = useContext(authContext);
  axiosSecure.interceptors.response.use(
    (response) => response,
    async (error) => {
      console.log(error);
      if (
        error.response &&
        (error.response.status === 401 || error.response.status === 403)
      ) {
        SignOutUser();
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default useAxiosSecure;
