import { makeAutoObservable } from "mobx";

export class LoginRegisterStore {
  email = "";
  pass = "";
  errors : string[] = [];
  isLoading = false;

  constructor() { makeAutoObservable(this); }

  setEmail(val: string) { this.email = val }
  setPass(val: string) { this.pass = val };
  setErrors(val: string[]) { this.errors = val };
  setIsLoading(val: boolean) { this.isLoading = val };
  reset() {
    this.email = "";
    this.pass = "";
    this.errors = [];
    this.isLoading = false;
  };
}