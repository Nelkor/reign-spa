<script setup lang="ts">
import { LanguageSelector } from '@/i18n'
import { MainPage } from '@/main-page'

import { useApp } from './app.hook'

const { isAppReady } = useApp()
</script>

<template>
  <LanguageSelector />
  <MainPage v-if="isAppReady" />
  <div v-else>Wait...</div>
</template>
