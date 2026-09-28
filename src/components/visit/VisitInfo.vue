<script setup lang="ts">
import type { VisitRecord } from '@/types/visit'
import { formatVisitTime } from '@/utils/format'

defineProps<{
  record: VisitRecord
}>()
</script>

<template>
  <el-descriptions :column="2" border title="就诊信息">
    <el-descriptions-item label="就诊编号">{{ record.id }}</el-descriptions-item>
    <el-descriptions-item label="患者姓名">{{ record.patientName }}</el-descriptions-item>
    <el-descriptions-item label="科室">{{ record.department }}</el-descriptions-item>
    <el-descriptions-item label="就诊时间">
      {{ formatVisitTime(record.visitTime) }}
    </el-descriptions-item>
    <el-descriptions-item label="诊断" :span="2">{{ record.diagnosis }}</el-descriptions-item>
  </el-descriptions>
</template>
