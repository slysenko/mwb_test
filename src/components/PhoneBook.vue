<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps(['phoneBookRecords', 'loading'])

const phoneBookRecordsSorted = computed(() => {
  return [...props.phoneBookRecords].sort((a, b) => {
    const nameA = a.lastName.toUpperCase()
    const nameB = b.lastName.toUpperCase()
    if (nameA < nameB) {
      return -1
    }
    if (nameA > nameB) {
      return 1
    }

    return 0
  })
})
</script>

<template>
  <div>
    <table>
      <caption>
        The Phone Book
      </caption>
      <thead>
        <tr>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Phone Number</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="!phoneBookRecordsSorted.length">
          <td v-if="loading">LOADING</td>
          <td v-else>No records yet!</td>
        </tr>
        <tr v-for="record in phoneBookRecordsSorted" :key="record.firstName">
          <td>{{ record.firstName }}</td>
          <td>{{ record.lastName }}</td>
          <td>{{ record.phoneNumber }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
