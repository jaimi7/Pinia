<script setup>
import { useFirstStore } from "../store/FirstStore";

const firstStore = useFirstStore();

const count = firstStore.count;
const doubleCount = firstStore.doubleCount;

firstStore.increment();

defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <div>
      <p>Store : count : {{ count }}</p>
      <p>Getter : doubleCount : {{ doubleCount }}</p>
      <button @click="firstStore.increment()">Increment</button>
      <p>Action : Count : {{ firstStore.count }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
