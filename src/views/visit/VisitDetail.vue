<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { VisitRecord } from '@/types/visit'
import { getVisitById } from '@/api/visit'
import VisitInfo from '@/components/visit/VisitInfo.vue'

const props = defineProps<{
  id: string
}>()

const router = useRouter()
const record = ref<VisitRecord | null>(null)
const loading = ref(false)
const notFound = ref(false)
const error = ref('')

async function load() {
  loading.value = true
  error.value = ''
  notFound.value = false
  try {
    const data = await getVisitById(props.id)
    if (data) {
      record.value = data
    } else {
      notFound.value = true
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : '加载失败'
  } finally {
    loading.value = false
  }
}

function goBack() {
  router.push({ name: 'VisitList' })
}

onMounted(load)
</script>

<template>
  <div class="page">
    <header class="page__header">
      <el-button @click="goBack">返回列表</el-button>
      <h2 class="page__title">就诊详情</h2>
    </header>

    <el-alert
      v-if="error"
      class="page__error"
      type="error"
      :title="error"
      show-icon
      :closable="false"
    />

    <div v-loading="loading" class="page__body">
      <el-empty v-if="notFound" description="未找到该就诊记录">
        <el-button type="primary" @click="goBack">返回列表</el-button>
      </el-empty>
      <VisitInfo v-else-if="record" :record="record" />
    </div>
  </div>
</template>

<style scoped>
.page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px;
}

.page__header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.page__title {
  margin: 0;
  font-size: 20px;
}

.page__error {
  margin-bottom: 12px;
}

.page__body {
  min-height: 120px;
}
</style>
