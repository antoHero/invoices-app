<template>
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
</template>
<script setup></script>
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
