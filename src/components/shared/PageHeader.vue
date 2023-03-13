<template>
  <q-header elevated class="bg-white text-grey-10">
    <q-toolbar
      class="row no-wrap justify-center items-center"
      style="bottom: 0"
    >
      <q-text-h2
        class="row items-center"
        style="color: #474498; font-size: 18px"
        >Paypay.</q-text-h2
      >
      <q-list class="q-ma-none q-ml-lg q-py-none row items-center">
        <q-item
          style="
            border-bottom: 3px solid transparent;
            padding: 20px;
            height: 70px;
          "
          :to="link.to"
          exact
          v-for="(link, idx) in links"
          :key="idx"
          :class="
            $route.matched.some(({ path }) => path === link.to) ? 'active' : ''
          "
        >
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

<style>
.active {
  border-bottom: 3px solid #63657f !important;
  color: #423dbe !important;
}
</style>
