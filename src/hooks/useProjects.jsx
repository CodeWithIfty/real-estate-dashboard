import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { authContext } from "../context/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useProjects = () => {
  const { user } = useContext(authContext);
  const axiosSecure = useAxiosSecure();
  const {
    data: projects,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["projects", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/projects`);
      return res.data;
    },
  });

  return { projects, isLoading, refetch };
};

export default useProjects;
