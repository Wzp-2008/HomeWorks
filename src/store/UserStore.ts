import { defineStore } from "pinia";
import { Auth } from "../entities/Auth";

export const useUserStore = defineStore("user", {
  state() {
    return {
      userLevel: Auth.STUDENT,
      token: "",
      username: "",
    };
  },
  persist: true,
});
