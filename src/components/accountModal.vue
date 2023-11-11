<!-- accountModal.vue -->
<template>
  <div v-if="isModalOpen" class="modal-overlay">
    <div class="modal">
      <p>Contenu du modal</p>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalOpen = ref(false);

const closeModal = () => {
  console.log('Close Modal from accountModal called');
  isModalOpen.value = false; // Ferme le modal
};
</script>

<style scoped>
/* Styles pour le modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
</style>
