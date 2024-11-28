import { axiosClient } from "@/shared/api/axios-client";
import type { User } from "@/shared/types/auth";

export const userService = {
  async getMe() {
    const response = await axiosClient.get<User>("/users/me");
    return response.data;
  },
};
