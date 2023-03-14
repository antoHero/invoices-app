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

          <div class="row items-start justify-between q-pa-lg blue-gradient">
            <div class="column vertical-middle">
              <p><b>Invoice Number</b></p>
              <p>INV-2022-010</p>
              <p>Issued Date: 11 Jan 2022</p>
              <p>Due Date: 18 Jan 2022</p>
            </div>
            <q-space />
            <div class="column text-right vertical-middle">
              <p><b>Billed To</b></p>
              <p>Zaky Grizzly</p>
              <p>Monlight Agency LTD</p>
              <p>East Java, Indonesia</p>
            </div>
          </div>

          <div class="q-pa-lg">
            <div class="row items-start justify-between">
              <div class="">
                <p class="m-0"><b>Item Detail</b></p>
                <p class="text-grey">Type Item for Hours item.</p>
              </div>
              <q-space />
              <q-btn
                icon="tune"
                flat
                size="md"
                label="Customize"
                class="customize-btn"
              />
            </div>

            <table>
              <thead>
                <tr>
                  <th
                    class="text-grey text-capitalize"
                    v-for="header in tableHeaders"
                    :key="header.id"
                    scope="col"
                    :width="header.id === 1 ? '50%' : 'auto'"
                  >
                    {{ header.name }}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, idx) in rows" :key="idx">
                  <td data-label="item Name">
                    <div class="mb-2 table-items">
                      {{ item.name }}
                    </div>
                  </td>
                  <td data-label="Hours" class="">
                    <div class="table-items">
                      {{ item.hours }}
                    </div>
                  </td>

                  <td data-label="Rate/hr">
                    <div class="table-items">
                      {{ item.rate }}
                    </div>
                  </td>
                  <td data-label="Tax">
                    <div class="table-items">
                      {{ item.tax }}
                    </div>
                  </td>
                  <td data-label="Line Total">
                    <div class="table-items">
                      {{ item.line_total }}
                    </div>
                  </td>
                  <td data-label="Action">
                    <q-btn round color="primary" icon="add" />
                  </td>
                </tr>
                <tr>
                  <td data-label="item Name">
                    <div class="mb-2 table-items">Description</div>
                  </td>
                </tr>
              </tbody>
            </table>
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
const columns = [
  {
    name: "name",
    required: true,
    label: "Item Name",
    align: "left",
    field: (row) => row.name,
  },
  { name: "hours", align: "center", label: "Hours", field: "hours" },
  { name: "rate", label: "Rate/Hr", field: "rate" },
  { name: "tax", label: "Tax", field: "tax" },
  { name: "line_total", label: "Line Total", field: "line_total" },
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
  },
  setup() {
    const formData = ref({
      itemName: "Payment Project - Monlight Mobile Design",
      itemDescription: "Description",
      hours: 120,
      rate: 40,
      tax: 30,
    });

    const lineTotal = ref(
      formData.value.hours * formData.value.rate + formData.value.tax
    );

    return {
      formData,
      tableHeaders: items,
      lineTotal,
      columns,
      rows,
      dollar,
    };
  },
});
</script>

<style lang="scss" scoped>
.blue-gradient {
  color: #fff;
  border-radius: 25px;
  background: -webkit-linear-gradient(110deg, #3f3f9f 40%, rgba(0, 0, 0, 0) 30%),
    -webkit-radial-gradient(farthest-corner at 0% 0%, #4d4ba2 70%, #6e70ad 70%);
  background: -o-linear-gradient(110deg, #3f3f9f 40%, rgba(0, 0, 0, 0) 30%),
    -o-radial-gradient(farthest-corner at 0% 0%, #4d4ba2 70%, #6e70ad 70%);
  background: -moz-linear-gradient(110deg, #3f3f9f 40%, rgba(0, 0, 0, 0) 30%),
    -moz-radial-gradient(farthest-corner at 0% 0%, #4d4ba2 70%, #6e70ad 70%);
  background: linear-gradient(110deg, #3f3f9f 40%, rgba(0, 0, 0, 0) 30%),
    radial-gradient(farthest-corner at 0% 0%, #4d4ba2 70%, #6e70ad 70%);
}

.page-container {
  padding-top: 70px;
}

.customize-btn {
  background-color: #eceff9;
  color: #9598c9;
  border-radius: 10px;
}

.table-items {
  border: 1px solid #e1e4e7;
  border-radius: 10px;
  padding: 10px;
  margin: 0 2px 0 2px;
  background: #fcfcfc;
}

table {
  border-collapse: collapse;
  margin: 1rem 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  tr {
    padding: 0.35em;
  }
  th,
  td {
    padding: 0.625em;
    text-align: start;
    vertical-align: baseline;
  }
  th {
    font-size: 0.85em;
    border-bottom: 1px solid #ddd;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
  }
}

@media screen and (max-width: 600px) {
  table {
    border: 0;
  }
  table caption {
    font-size: 1.3em;
  }
  table thead {
    border: none;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
  table tr {
    border-bottom: 3px solid #ddd;
    display: flex;
    flex-direction: column;
  }
  table td {
    border-bottom: 1px solid #ddd;
    display: block;
    font-size: 0.8em;
  }
  table td::before {
    content: attr(data-label);
    float: left;
    font-weight: bold;
    display: block;
    text-transform: uppercase;
  }
  table td:last-child {
    border-bottom: 0;
  }
}
// Media queries
@media (max-width: 768px) {
  table {
    td {
      padding: 1rem 0.625rem;
      &::before {
        float: none;
        margin-bottom: 1rem;
      }
    }
  }
}
</style>
