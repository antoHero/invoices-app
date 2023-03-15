<template>
  <q-page padding class="page-container">
    <div class="q-pa-md">
      <q-breadcrumbs>
        <q-breadcrumbs-el label="Invoices" style="color: #9595b9" />
        <q-breadcrumbs-el
          :label="`edit Invoice (${invoice_number.toUpperCase()})`"
          style="color: #dcdfe9"
        />
      </q-breadcrumbs>
    </div>

    <div class="q-pa-md">
      <q-card class="my-card">
        <q-card-section>
          <BillingInfo :company="invoice?.company" :key="billingInfoKey" />

          <InvoiceCard :customer="invoice?.customer" :key="invoiceCardKey" />

          <div class="q-pa-lg">
            <InvoiceItems :tableHeaders="tableHeaders" :key="invoiceItemsKey" />
            <q-separator />

            <payment-info></payment-info>
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
import { useStore } from "vuex";

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

    const billingInfoKey = ref(0);

    const invoiceCardKey = ref(1);

    const invoice = ref({});

    const invoice_number = ref("inv-2022-010");

    const store = useStore();

    const getInvoice = () => {
      fetch(`/api/invoices/${invoice_number.value}`)
        .then((response) => response.json())
        .then((response) => {
          const { invoices } = response;
          invoice.value = invoices[0];
          store.commit("setActiveInvoice", invoices[0]);
          invoiceItemsKey.value += 1;
          billingInfoKey.value += 1;
          invoiceCardKey.value += 1;
        });
    };

    getInvoice();

    return {
      tableHeaders: items,
      invoiceItemsKey,
      billingInfoKey,
      invoiceCardKey,
      invoice_number,
      invoice,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  padding-top: 70px;
}
</style>
