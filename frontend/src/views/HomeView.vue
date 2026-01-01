<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const projects = ref([])

// Ganti URL ini sesuai alamat file PHP kamu di localhost
// Contoh: http://localhost/portofolio-saya/backend/api.php
const apiUrl = 'http://localhost/portofolio-saya/backend/api.php'

onMounted(async () => {
  try {
    const response = await axios.get(apiUrl)
    projects.value = response.data.data
  } catch (error) {
    console.error('Error fetching data:', error)
  }
})
</script>

<template>
  <main>
    <h1>Portofolio Saya</h1>
    <div class="grid">
      <div v-for="item in projects" :key="item.id" class="card">
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <small>Tech: {{ item.tech }}</small>
      </div>
    </div>
  </main>
</template>

<style scoped>
.grid { display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); }
.card { border: 1px solid #ccc; padding: 1rem; border-radius: 8px; }
</style>