import UserService from "../services/user.services";
import { useQuery } from "react-query";
import { IReactQuery, IUserReturn } from "../types/interface";

const useUser = (email: string, password: string): IReactQuery<IUserReturn> => {
  const { isLoading, data, error, refetch } = useQuery(
    ["User", email],
    async () => {
      return await UserService.login(email, password);
    },
    {
      onError: (err) => {
        console.error(err);
      },
    }
  );
  return { isLoading, data, error, refetch };
};
