<template>
  <q-page padding>
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
          <div class="row items-start justify-between q-pa-lg">
            <div class="row items-start justify-evenly">
              <div>
                <img
                  alt="Dipa logo"
                  src="~assets/images/dipa.png"
                  style="width: 70px; height: 70px"
                />
              </div>
              <div class="q-mt-md">
                <span style="color: #6b6d7c">Dipa Inhouse</span>
                <p style="color: #e1e4e7">hello@dipainhouse.com</p>
              </div>
            </div>
            <div style="color: #e1e4e7">
              <p>Ijen Boulevard Street 101</p>
              <p>Malang City, 65115</p>
              <p>East Java, Indonesia</p>
            </div>
          </div>

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
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius",
    };
  },
});
</script>

<style>
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
</style>
