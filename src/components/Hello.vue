<script setup lang="ts">
const props = defineProps<{
  name:string 
}>()
const uppercase = computed(()=> props.name.toUpperCase()) 
</script>

<template>
  <div   class="color-gray-300 font-sans xs:text-3 lg:text-43" >
    hello  {{  uppercase}}, with UnoCSS 
  </div>
</template>
