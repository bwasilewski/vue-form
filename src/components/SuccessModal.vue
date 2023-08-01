<template>
  <div class="modal" v-if="showSuccessModal">
    <div class="modal-backdrop"></div>
    <div class="modal-content">
      <h1>Form submitted successfully! 👍</h1>
      <table>
        <tbody>
          <tr v-for="field in fields" :key="field.name">
            <td>
              <strong>{{ field.label }}</strong>
            </td>
            <td>{{ field.value }}</td>
          </tr>
        </tbody>
      </table>
      <button class="button" @click="$store.commit('toggleSuccessModal')">
        Close
      </button>
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
  background: rgba(0, 0, 0, 0.75);
}

.modal-content {
  position: absolute;
  top: 100px;
  left: calc((100vw - 500px - 6rem) / 2);
  width: 500px;
  background: #fff;
  padding: 3rem;
}
</style>
