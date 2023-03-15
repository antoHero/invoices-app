<template>
  <div class="row items-start justify-between q-pa-lg blue-gradient">
    <div class="column vertical-middle">
      <p><b>Invoice Number</b></p>
      <p>INV-2022-010</p>
      <p>Issued Date: {{ store?.state?.activeInvoice?.issuedDate }}</p>
      <p>Due Date: {{ store?.state?.activeInvoice?.dueDate }}</p>
    </div>
    <q-space />
    <div class="column text-right vertical-middle">
      <p><b>Billed To</b></p>
      <p>{{ props?.customer?.name }}</p>
      <p>{{ props?.customer?.companyName }}</p>
      <p>{{ `${props?.customer?.state}, ${props?.customer?.country}` }}</p>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
const props = defineProps({
  customer: Object,
});

const store = useStore();
</script>
<style scoped>
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
