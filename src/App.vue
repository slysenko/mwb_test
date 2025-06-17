<script setup lang="ts">
import { ref } from 'vue'

import PhoneForm from './components/PhoneForm.vue'
import PhoneBook from './components/PhoneBook.vue'

import { getData } from './services.ts'

const phoneBookRecords = ref<PhoneBookEntry[]>([])
const loading = ref<boolean>(false)

function appendRecord(event) {
  phoneBookRecords.value.push(event)
}

async function fetchData(delay) {
  loading.value = true
  try {
    phoneBookRecords.value = await getData()
    loading.value = false
  } catch (error) {
    console.log(`Attempt failed with error: ${error}. Waiting ${delay} ms before retrying.`)
    await new Promise((resolve) => setTimeout(resolve, delay))
    return fetchData(delay)
  }
}

fetchData(500)
</script>

<template>
  <main>
    <div>
      <PhoneForm @submitForm="appendRecord" />
    </div>
    <hr />
    <div>
      <PhoneBook :phoneBookRecords="phoneBookRecords" :loading="loading" />
    </div>
  </main>
</template>

<style scoped></style>
