<script setup lang="ts">
import type { VisitRecord } from '@/types/visit'
import { formatVisitTime } from '@/utils/format'

defineProps<{
  list: VisitRecord[]
  loading?: boolean
}>()

const emit = defineEmits<{
  (e: 'row-click', record: VisitRecord): void
}>()
</script>

<template>
  <el-table
    v-loading="loading"
    :data="list"
    empty-text="暂无就诊记录"
    class="visit-table"
    @row-click="(row: VisitRecord) => emit('row-click', row)"
  >
    <el-table-column prop="patientName" label="患者姓名" min-width="120" />
    <el-table-column prop="department" label="科室" min-width="140" />
    <el-table-column prop="diagnosis" label="诊断" min-width="220" show-overflow-tooltip />
    <el-table-column label="时间" min-width="180">
      <template #default="{ row }">{{ formatVisitTime(row.visitTime) }}</template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
.visit-table {
  width: 100%;
}

.visit-table :deep(.el-table__row) {
  cursor: pointer;
}
</style>
