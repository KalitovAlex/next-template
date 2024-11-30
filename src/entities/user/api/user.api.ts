import { axiosClient } from "@/shared/api/axios-client";
import { ENDPOINTS } from "@/shared/constants/api";
import { User } from "@/entities/user/model/types";

export const userApi = {
  async getSelf(): Promise<User> {
    const { data } = await axiosClient.get<User>(ENDPOINTS.SELF);
    return data;
  },
};
