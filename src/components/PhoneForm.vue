<script setup lang="ts">
import { ref } from 'vue'

const firstName = ref<string>('')
const lastName = ref<string>('')
const phoneNumber = ref<string>('')

const emit = defineEmits(['submitForm'])

function resetForm() {
  firstName.value = ''
  lastName.value = ''
  phoneNumber.value = ''
}

function submitForm() {
  emit('submitForm', {
    firstName: firstName.value,
    lastName: lastName.value,
    phoneNumber: phoneNumber.value,
  })
  resetForm()
}
</script>

<template>
  <div>
    <div>
      <label for="firstName">Enter the First name</label>
      <input type="text" name="firstName" id="firstName" placeholder="John" v-model="firstName" />
    </div>
    <div>
      <label for="firstName">Enter the last name</label>
      <input type="text" name="lastName" id="lastName" placeholder="Dow" v-model="lastName" />
    </div>
    <div>
      <label for="firstName">Enter the phone number</label>
      <input
        type="text"
        name="phoneNumber"
        id="phoneNumber"
        placeholder="123445567890"
        v-model="phoneNumber"
      />
    </div>
    <div>
      <button @click="submitForm">Submit</button>
    </div>
  </div>
</template>
