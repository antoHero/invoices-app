<template>
  <q-layout view="Hlh Lpr lFf">
    <PageHeader :links="essentialLinks" />
    <q-page-container class="container-padding main-container">
      <router-view />
    </q-page-container>
    <mobile-menu v-if="width < 1000" />
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import PageHeader from "components/shared/PageHeader.vue";
import MobileMenu from "components/shared/MobileMenu.vue";
import { domSize } from "src/utils/helper";
const linksList = [
  {
    title: "Dashboard",
    icon: "space_dashboard",
    to: "/dashboard",
  },
  {
    title: "Invoices",
    icon: "description",
    to: "/",
  },
  {
    title: "Wallet",
    icon: "wallet",
    to: "/wallet",
  },
  {
    title: "Activity",
    icon: "poll",
    to: "/activity",
  },
  {
    title: "Help",
    icon: "phone",
    to: "/help",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    PageHeader,
    MobileMenu,
  },

  setup() {
    const { width, height } = domSize();
    return {
      essentialLinks: linksList,
      width,
      height,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  margin: 0px auto;
  max-width: 1280px;
  @media (max-width: 1000px) {
    padding-bottom: 50px;
  }
}
</style>
