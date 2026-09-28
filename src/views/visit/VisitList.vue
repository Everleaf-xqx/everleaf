<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { VisitRecord } from '@/types/visit'
import { getVisitList } from '@/api/visit'
import VisitTable from '@/components/visit/VisitTable.vue'

const router = useRouter()
const list = ref<VisitRecord[]>([])
const loading = ref(false)
const error = ref('')

async function load() {
  loading.value = true
  error.value = ''
  try {
    list.value = await getVisitList()
  } catch (e) {
    error.value = e instanceof Error ? e.message : '加载失败'
  } finally {
    loading.value = false
  }
}

function goDetail(record: VisitRecord) {
  router.push({ name: 'VisitDetail', params: { id: record.id } })
}

onMounted(load)
</script>

<template>
  <div class="page">
    <header class="page__header">
      <h2 class="page__title">就诊记录</h2>
    </header>

    <el-alert
      v-if="error"
      class="page__error"
      type="error"
      :title="error"
      show-icon
      :closable="false"
    />

    <VisitTable :list="list" :loading="loading" @row-click="goDetail" />
  </div>
</template>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}

.page__header {
  margin-bottom: 16px;
}

.page__title {
  margin: 0;
  font-size: 20px;
}

.page__error {
  margin-bottom: 12px;
}
</style>
