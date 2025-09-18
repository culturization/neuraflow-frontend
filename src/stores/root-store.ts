import { UserStore } from "./user-store";

class RootStore {
  userStore = new UserStore();
}

export default RootStore;