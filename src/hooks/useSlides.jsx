import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useSlides = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: slides,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["slides", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/slides`);
      return res.data.sliders;
    },
  });

  return { slides, isLoading, refetch };
};

export default useSlides;
