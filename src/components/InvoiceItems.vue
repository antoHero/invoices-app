<template>
  <div class="row items-start justify-between">
    <div class="">
      <p class="m-0"><b>Item Detail</b></p>
      <p class="text-grey">Type Item for Hours item.</p>
    </div>
    <q-space />
    <q-btn icon="tune" flat size="md" label="Customize" class="customize-btn" />
  </div>
  <div class="table-container">
    <table>
      <thead>
        <tr class="header-row">
          <th
            class="text-grey text-capitalize"
            v-for="header in props.tableHeaders"
            :key="header.id"
            scope="col"
            :width="header.id === 1 ? '50%' : 'auto'"
          >
            {{ header.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in props.rows" :key="idx">
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
            <q-btn round color="primary" icon="add" class="action-btn" />
          </td>
        </tr>
        <tr>
          <td data-label="item Name">
            <div class="mb-2 table-items">Description</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({
  tableHeaders: Array,
  rows: Array,
});
</script>

<style lang="scss" scoped>
.customize-btn {
  border: 1px solid #dbeafe;
  background-color: #dbeafe;
  color: #1e40af;
  border-radius: 10px;
}

.table-container {
  overflow-x: auto;
}

.table-items {
  border: 1px solid #e1e4e7;
  border-radius: 10px;
  padding: 10px;
  margin: 0 2px 0 2px;
  background: #fcfcfc;
}

.action-btn {
  background-color: #1d4ed8 !important;
  color: #fff;
}

table {
  border-collapse: collapse;
  margin: 1rem 0;
  padding: 0;
  width: 100%;
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
</style>
