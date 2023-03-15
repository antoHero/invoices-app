<template>
  <div class="row items-start justify-between q-pa-lg">
    <div class="row items-start justify-evenly">
      <div>
        <div class="company-logo" v-if="props?.company?.logo !== ''">
          <img
            v-bind:src="`assets/images/dipa.png`"
            :alt="`${props?.company?.name}-logo`"
          />
        </div>
        <span class="dipa-logo" v-else>D</span>
      </div>
      <div class="q-mt-xs q-ml-md content">
        <span>{{ props?.company?.name }}</span>
        <p>{{ props?.company?.email }}</p>
      </div>
    </div>
    <div class="content">
      <p>{{ props?.company?.addressOne }}</p>
      <p>{{ props?.company?.addressTwo }}</p>
      <p>{{ `${props?.company?.state}, ${props?.company?.country}` }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  company: Object,
});
</script>

<style scoped>
.dipa-logo {
  display: inline-block;
  padding: 5px 16px;
  background-color: #1d4ed8;
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  border-radius: 9999px;
}

.content {
  color: #a6aaad;
}

.content span {
  font-size: 18px;
  font-weight: 800;
  color: #000;
}

.company-logo {
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 100%;
  margin-right: 1rem;
}

.company-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
