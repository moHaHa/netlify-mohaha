<script setup lang="ts">
const props = defineProps<{
  name:string 
}>()
const uppercase = computed(()=> props.name.toUpperCase()) 
</script>

<template>
  <div   font-sans text="xl gray-200"  >
    hello  {{  uppercase}}, with UnoCSS 
  </div>
</template>
