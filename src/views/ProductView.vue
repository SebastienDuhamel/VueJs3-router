<template>
  <h1> Product</h1>
  <p> {{ designation }}</p>
</template>

<script>
export default {
  name: 'ProductView',
  props: ['designation'],
}
</script>