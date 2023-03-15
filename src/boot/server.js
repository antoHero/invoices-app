import { makeServer } from "src/server";

export default async () => {
  if (process.env.NODE_ENV === "development") {
    await makeServer();
  }
};
