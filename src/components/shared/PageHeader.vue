<template>
  <q-header elevated class="bg-white text-grey-10">
    <q-toolbar class="q-pa-md row no-wrap justify-center items-center">
      <!-- <q-btn dense flat round icon="menu" @click="showMenu = !showMenu" /> -->
      <q-text-h2
        class="row items-center"
        style="color: #474498; font-size: 18px"
        >Paypay.</q-text-h2
      >
      <q-list class="q-ma-none q-ml-lg q-py-none row items-center">
        <q-item :to="link.to" exact v-for="(link, idx) in links" :key="idx">
          <q-item-section avatar>
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section>{{ link.title }}</q-item-section>
        </q-item>
      </q-list>

      <q-dialog v-model="showMenu">
        <q-card>
          <q-card-section>
            <q-list class="q-ma-none q-py-none">
              <q-item to="/" exact>
                <q-item-section avatar>
                  <q-icon name="home" />
                </q-item-section>

                <q-item-section>Main Page</q-item-section>
              </q-item>
            </q-list>
          </q-card-section>
        </q-card>
      </q-dialog>
    </q-toolbar>
  </q-header>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageHeader",
  props: {
    links: {
      type: Array,
      default: () => [],
    },
  },
});
</script>
