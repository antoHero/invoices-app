<template>
  <q-layout view="Hlh Lpr lFf">
    <PageHeader :links="essentialLinks" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import PageHeader from "components/shared/PageHeader.vue";

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
  },

  setup() {
    return {
      essentialLinks: linksList,
    };
  },
});
</script>
