<template>
  <nav class="bg-white">
    <div class="nav-content container-padding">
      <ul>
        <li>
          <router-link
            to="/dashboard"
            :class="
              $route.matched.some(({ path }) => path === '/dashboard')
                ? 'active'
                : ''
            "
            class="desktop-nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="desktop-nav-link-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
            <p>Dashboard</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/"
            :class="
              $route.matched.some(({ path }) => path === '/invoices')
                ? 'active'
                : ''
            "
            class="desktop-nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="desktop-nav-link-icon desktop-nav-link-icon-active"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p>Invoices</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/wallet"
            :class="
              $route.matched.some(({ path }) => path === '/wallet')
                ? 'active'
                : ''
            "
            class="desktop-nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="desktop-nav-link-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            <p>Wallet</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/activity"
            :class="
              $route.matched.some(({ path }) => path === '/activity')
                ? 'active'
                : ''
            "
            class="desktop-nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="desktop-nav-link-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
            <p>Activity</p>
          </router-link>
        </li>
        <li>
          <router-link
            to="/help"
            :class="
              $route.matched.some(({ path }) => path === '/help')
                ? 'active'
                : ''
            "
            class="desktop-nav-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="desktop-nav-link-icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p>Help</p>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BottomNavbar",

  components: {},
});
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;

  bottom: 0;
  left: 0px;
  position: fixed;
  border-top: 1px solid #e6e6e6;
  padding-bottom: 10px;

  .nav-content {
    width: 100%;
    display: flex;
    padding-top: 2px;
    align-items: center;
    flex-direction: row;
    max-width: 1280px;
    justify-content: center;
  }
}

ul {
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  max-width: 800px;

  li {
    display: flex;
    font-weight: 500;

    &.active {
      color: #383584;
      border-bottom: 2px solid #383584;
      svg {
        fill: #383584 !important;
      }
    }
  }
}

.desktop-nav-link {
  display: inline-flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  color: #1f2937;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
  text-decoration: none;
}
.desktop-nav-link-icon {
  color: #838383;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 0.5rem;
}

.active {
  color: #383584;
  border-bottom: 2px solid #383584;
}
</style>
