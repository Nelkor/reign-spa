<script setup lang="ts">
import { useApp } from './app.hook'

const { counter, increment } = useApp()
</script>

<template>
  <h1>{{ counter }}</h1>
  <button @click="increment">Click me!</button>
</template>
