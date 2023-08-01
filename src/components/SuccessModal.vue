<template>
  <div class="modal" v-if="showSuccessModal">
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <h1>This is my modal</h1>
      <ul>
        <li v-for="field in fields" :key="field.name">
          <strong>{{ field.name }}:</strong> {{ field.value }}
        </li>
      </ul>
      <button @click="$store.commit('toggleSuccessModal')">Close</button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SuccessModal",
  computed: {
    ...mapState(["showSuccessModal", "fields"]),
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: absolute;
  top: 100px;
  left: calc((100vw - 400px) / 2);
  width: 400px;
  height: 200px;
  background: #fff;
  padding: 1rem;
}
</style>
