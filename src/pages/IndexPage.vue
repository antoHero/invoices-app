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
            <div class="row justify-center items-center q-pt-md">
              <div class="row w-100">
                <div class="row">
                  <q-card flat>
                    <b class="m-0">Payment Method</b>

                    <div>
                      <p class="m-0">Wire Transfer</p>
                      <p>
                        <b class="text-grey">Account Name:</b>
                        Barly Vallendito
                      </p>

                      <p>
                        <b class="text-grey">Account Number:</b>
                        9700 0023 4200 2900
                      </p>
                      <p>
                        <b class="text-grey">Routing Number:</b>
                        084009519
                      </p>
                    </div>
                  </q-card>
                </div>
                <q-space />
                <q-card flat>
                  <b class="m-0 text-primary">Select payment</b>
                  <q-card-section>
                    <div class="row">
                      <q-space />
                      <img
                        src="~assets/images/wise.png"
                        alt="wise logo"
                        height="50"
                        width="100"
                      />
                    </div>
                  </q-card-section>
                </q-card>
              </div>
              <q-space class="middle-space" />
              <div class="row w-100">
                <div class="row">
                  <q-card flat>
                    <div>
                      <p class="m-0">Sub Total</p>
                    </div>
                    <q-space />

                    <div>
                      <p class="m-0">Discount</p>
                      <p class="m-0">Total Tax</p>
                      <q-separator />
                      <p class="m-0 q-mt-md">Total Amount</p>
                    </div>
                  </q-card>
                </div>
                <q-space />
                <q-card flat>
                  <p class="m-0 q-ml-xl">{{ dollar.format(4800) }}</p>
                  <p class="m-0 q-ml-xl">{{ dollar.format(0) }}</p>
                  <p class="m-0 q-ml-xl">{{ dollar.format(0) }}</p>
                  <q-separator />
                  <p class="m-0 q-ml-xl q-mt-md">
                    {{ dollar.format(4800) }}
                  </p>
                </q-card>
              </div>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import BillingInfo from "../components/BillingInfo.vue";
import InvoiceCard from "../components/InvoiceCard.vue";
import InvoiceItems from "src/components/InvoiceItems.vue";
import { dollar } from "../utils/helper";
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
export default defineComponent({
  name: "IndexPage",
  components: {
    BillingInfo,
    InvoiceCard,
    InvoiceItems,
  },
  setup() {
    const invoiceItemsKey = ref(0);

    invoiceItemsKey.value += 1;

    return {
      tableHeaders: items,
      rows,
      dollar,
      invoiceItemsKey,
    };
  },
});
</script>

<style lang="scss" scoped>
.page-container {
  padding-top: 70px;
}
</style>
