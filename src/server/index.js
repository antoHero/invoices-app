import { createServer, Model, belongsTo } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  let server = createServer({
    environment,
    models: {
      invoice: Model,
      payment_information: Model.extend({
        invoice: belongsTo(),
      }),
    },

    seeds(server) {
      server.create("invoice", {
        id: 1,
        invoiceNumber: "inv-2022-010",
        issuedDate: "11 Jan 2022",
        dueDate: "18 Jan 2022",
        items: [
          {
            name: "Payment Project - Monlight Mobile Design",
            hours: 120,
            rate: 40,
            tax: 0,
            description: "",
          },
        ],
        company: {
          name: "Dipa Inhouse",
          email: "hello@dipainhouse.com",
          logo: "",
          addressOne: "Ijen Boulevard Street 101",
          addressTwo: "Malang City, 65115",
          state: "East Java",
          country: "Indonesia",
        },
        customer: {
          name: "Zaky Grizzly",
          companyName: "Monlight Agency LTD",
          state: "New York",
          country: "USA",
        },
      });
      server.create("payment_information", {
        id: 1,
        invoiceNumber: "inv-2022-010",
        paymentType: "Wire Transfer",
        paymentChannel: "Wise",
        accountNumber: "9700002342002900",
        accountName: "Barley Vallendito",
        routingNumber: "084009519",
      });
    },

    routes() {
      this.namespace = "api";
      this.get("/invoices/:id", (schema, request) => {
        return schema.invoices.where({
          invoiceNumber: request.params.id,
        });
      });
    },
  });

  return server;
}
