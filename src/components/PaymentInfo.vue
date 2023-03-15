<template>
  <div class="info-container-2">
    <div class="checkout-grid-1">
      <span class="info-left-text-1">Payment Method</span>
      <span class="info-left-text-3">
        <a class="info-left-text-4" href="">Select Payment</a>
      </span>

      <div class="info-left-container-3">
        <span class="info-left-text-5">Wire Transfer</span>
        <img
          :src="paymentInfo?.paymentChannelLogo"
          alt="wise logo"
          height="50"
          width="100"
          class="info-left-wise-logo"
        />

        <div style="margin-top: 10px">
          <p>
            <span class="checkout-text-1">Account Name: </span>
            <span class="checkout-text-2"> {{ paymentInfo?.accountName }}</span>
          </p>
          <p>
            <span class="checkout-text-1">Account Number: </span>
            <span class="checkout-text-2">
              {{ paymentInfo?.accountNumber }}</span
            >
          </p>
          <p>
            <span class="checkout-text-1">Routing Number: </span>
            <span class="checkout-text-2">
              {{ paymentInfo?.routingNumber }}</span
            >
          </p>
        </div>
      </div>
    </div>
    <div class="checkout-grid-2"></div>
    <div class="checkout-grid-3">
      <div class="info-right-container">
        <div class="info-right-container-half">
          <p class="info-right-text-1">Sub Total</p>
          <p class="checkout-text-1">Discount</p>
          <p class="checkout-text-1">Total tax</p>

          <p class="checkout-text-1" style="margin-top: 50px">Total Amount</p>
        </div>
        <div
          class="info-right-container-half right-text-info"
          style="text-align: right"
        >
          <p class="m-0 q-ml-xl">
            {{ subTotal }}
          </p>
          <p class="m-0 q-ml-xl">
            {{ dollar.format(charge?.discount) }}
          </p>
          <p class="m- q-ml-xl">{{ dollar.format(charge?.tax) }}</p>
          <p class="" style="margin-top: 50px">
            {{ totalPrice }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, reactive } from "vue";
import { useStore } from "vuex";
import { dollar } from "../utils/helper";

const paymentInfo = ref({});

const charge = reactive({
  discount: 0,
  tax: 0,
});

const store = useStore();

const totalPrice = computed(() => {
  let total = 0;
  store?.state?.activeInvoice?.items.forEach((item) => {
    total += item.hours * item.rate + item.tax * 100;
  });

  return dollar.format(total);
});

const subTotal = computed(() => {
  let total = 0;
  store?.state?.activeInvoice?.items.forEach((item) => {
    total += item.hours * item.rate;
  });

  return dollar.format(total);
});

const getPaymentInformation = () => {
  fetch(`/api/invoices/${store?.state?.activeInvoice?.id}/payment`)
    .then((response) => response.json())
    .then((response) => {
      const { payments } = response;
      paymentInfo.value = payments[0];
    });
};

getPaymentInformation();
</script>

<style scoped>
.checkout-grid-1,
.checkout-grid-2,
.checkout-grid-3 {
  margin-top: 10px;
  width: 100%;
}
.checkout-text-1 {
  color: #6b7280;
}
.checkout-text-2 {
  font-weight: 600;
  color: #111827;
}
.info-container-2 {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
  margin-top: 25px;
}
.info-left-text-1 {
  color: #111827;
  line-height: 0.6rem;
  font-weight: 600;
}
.info-left-text-3 {
  color: #111827;
  line-height: 0.6rem;
  font-weight: 600;
  margin-top: 2px;
  float: right;
}
.info-left-text-4 {
  color: #1e40af;
  text-decoration: none;
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.info-left-container-3 {
  margin-top: 20px;
  background-color: #f3f4f6;
  border-radius: 1rem;
  border-width: 1px;
  border-color: #f3f4f6;
  padding: 1rem;
}
.info-left-text-5 {
  font-weight: 600;
  color: #111827;
}
.info-left-wise-logo {
  margin-top: 2px;
  float: right;
}
.info-right-container {
  display: flex;
  flex-wrap: wrap;
}
.info-right-container-half {
  width: 50%;
}

.right-text-info p {
  font-weight: 600;
  color: #111827;
}

.info-right-text-1 {
  font-weight: 600;
  color: #111827;
}
.info-right-text-2 {
  font-weight: 600;
  color: #111827;
}
@media (min-width: 1024px) {
  .checkout-grid-1 {
    width: 40%;
  }
  .checkout-grid-2 {
    width: 20%;
  }
  .checkout-grid-3 {
    width: 40%;
  }
}
</style>
