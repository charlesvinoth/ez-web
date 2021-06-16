import { users } from "@/api/factory";

export const user = {
  data: null,
  isPending: false,
  successMsg: "",
  errorMsg: "",
};

export async function createUser() {
  this.user.data = null;
  this.user.isPending = true;
  this.user.successMsg = "";
  this.user.errorMsg = "";

  try {
    const { status, data } = await users.create({
      name: "Charles Vinoth",
      email: "charles@ezofis.com",
    });

    if (status !== 201) throw "invalid response";

    this.user.successMsg = "user created successfully";
    this.user.data = data;
  } catch (e) {
    if (!e.response) this.user.errorMsg = "error creating user";

    const { status } = e.response;

    if (status === 409) this.user.errorMsg = "email already exists";

    if (status === 406)
      this.user.errorMsg = "password does not meet the requirements";
  } finally {
    this.user.isPending = false;
  }
}
