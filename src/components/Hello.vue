<script setup lang="ts">
const props = defineProps<{
  name:string 
}>()
const uppercase = computed(()=> props.name.toUpperCase()) 
</script>

<template>
  <div>
    hello  {{  uppercase}}
  </div>
</template>
