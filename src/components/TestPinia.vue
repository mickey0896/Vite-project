<template>
  <div>
    <br />
    {{ counterStore.count }}
    <button @click="counterStore.increase">Click</button>
  </div>
  <br />
  <ul>
    <li>
      <router-link to="/demo" @click="say('แน่ใจนะ')">router test</router-link>
    </li>
    <li>
      <router-link to="/demo2" @click="say('แน่ใจนะ')"
        >router test v2</router-link
      >
    </li>
  </ul>
  <!-- <router-view> </router-view> -->
</template>

<script lang="ts">
import { useCounterStore } from "../store/useCounterStore";

export default {
  setup() {
    const counterStore = useCounterStore();
    return { counterStore };
  },
  methods: {
    say(message: String) {
      alert(message);
    },
  },
};
</script>

<style></style>
../store/useCounterStore../stores/useCounterStore
