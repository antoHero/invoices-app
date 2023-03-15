import { makeServer } from "src/server";

export default boot(async () => {
  if (process.env.NODE_ENV === "development") {
    makeServer();
  }
});
