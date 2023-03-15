import { ref, onMounted, onUnmounted } from "vue";

export const dollar = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

export const domSize = () => {
  const width = ref(0);
  const height = ref(0);

  function update() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  onMounted(() => {
    update();
    window.addEventListener("resize", update);
  });
  onUnmounted(() => window.removeEventListener("resize", update));

  return { width, height };
};
