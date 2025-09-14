import { makeAutoObservable } from "mobx";

export default class RegisterStore {
  name = "";
  pass = "";
  errors : string[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setName(val: string) { this.name = val };
  setPass(val: string) { this.pass = val };
  setErrors(val: string[]) { this.errors = val };
  setIsLoading(val: boolean) { this.isLoading = val };
  reset() {
    this.name = "";
    this.pass = "";
    this.errors = [];
    this.isLoading = false;
  };
}
