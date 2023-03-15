<template>
  <q-page padding class="page-container">
    <div class="q-pa-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Invoices" style="color: #9595b9" />
        <q-breadcrumbs-el
          label="edit Invoice (INV-2022-010)"
          style="color: #dcdfe9"
        />
      </q-breadcrumbs>
    </div>

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <billing-info></billing-info>

          <invoice-card></invoice-card>

          <div class="q-pa-lg">
            <InvoiceItems
              :tableHeaders="tableHeaders"
              :rows="rows"
              :key="invoiceItemsKey"
            />
            <q-separator />

            <PaymentInfo :paymentInfo="paymentInfo" :key="paymentInfoKey" />
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import BillingInfo from "src/components/BillingInfo.vue";
import InvoiceCard from "src/components/InvoiceCard.vue";
import InvoiceItems from "src/components/InvoiceItems.vue";
import PaymentInfo from "src/components/PaymentInfo.vue";

const items = [
  {
    id: 1,
    name: "Item Name",
  },
  {
    id: 2,
    name: "Hours",
  },
  {
    id: 3,
    name: "Rate/Hr",
  },
  {
    id: 4,
    name: "Tax",
  },
  {
    id: 5,
    name: "Line Total",
  },
  {
    id: 6,
    name: "",
  },
];
const rows = [
  {
    name: "Payment Project - Monlight Mobile Design",
    hours: 120,
    rate: 40,
    tax: 30,
    line_total: 48000,
  },
];
const paymentInfo = {
  accountName: "Barley Vallendito",
  accountNumber: "9700 0023 4200 2900",
  routingNumber: "084009519",
  subTotal: 48000,
  discount: 0,
  tax: 0,
};
export default defineComponent({
  name: "IndexPage",
  components: {
    BillingInfo,
    InvoiceCard,
    InvoiceItems,
    PaymentInfo,
  },
  setup() {
    const invoiceItemsKey = ref(0);

    const paymentInfoKey = ref(0);

    const invoice_number = ref("inv-2022-010");

    const getInvoice = () => {
      console.log(invoice_number.value);
      fetch(`/api/invoices/${invoice_number.value}`)
        .then((response) => response.json())
        .then((invoice) => {
          console.log(invoice);
        });
    };

    getInvoice();

    paymentInfoKey.value += 1;

    return {
      tableHeaders: items,
      rows,
      invoiceItemsKey,
      paymentInfo,
      paymentInfoKey,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  padding-top: 70px;
}
</style>
