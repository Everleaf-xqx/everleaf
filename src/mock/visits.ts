import type { VisitRecord } from '@/types/visit'

const VISITS: VisitRecord[] = [
  {
    id: 'V20260901001',
    patientName: '张伟',
    department: '内科',
    diagnosis: '急性上呼吸道感染',
    visitTime: '2026-09-01T09:15:00',
  },
  {
    id: 'V20260901002',
    patientName: '李娜',
    department: '呼吸内科',
    diagnosis: '支气管哮喘（急性发作）',
    visitTime: '2026-09-01T10:40:00',
  },
  {
    id: 'V20260902001',
    patientName: '王强',
    department: '骨科',
    diagnosis: '左侧桡骨远端骨折',
    visitTime: '2026-09-02T08:30:00',
  },
  {
    id: 'V20260902002',
    patientName: '刘洋',
    department: '消化内科',
    diagnosis: '慢性胃炎',
    visitTime: '2026-09-02T14:05:00',
  },
  {
    id: 'V20260903001',
    patientName: '陈静',
    department: '心内科',
    diagnosis: '原发性高血压（2级）',
    visitTime: '2026-09-03T09:50:00',
  },
  {
    id: 'V20260903002',
    patientName: '赵磊',
    department: '神经内科',
    diagnosis: '偏头痛',
    visitTime: '2026-09-03T11:20:00',
  },
  {
    id: 'V20260904001',
    patientName: '孙丽',
    department: '内分泌科',
    diagnosis: '2型糖尿病',
    visitTime: '2026-09-04T08:00:00',
  },
  {
    id: 'V20260904002',
    patientName: '周杰',
    department: '皮肤科',
    diagnosis: '接触性皮炎',
    visitTime: '2026-09-04T15:35:00',
  },
  {
    id: 'V20260905001',
    patientName: '吴敏',
    department: '妇科',
    diagnosis: '月经不调',
    visitTime: '2026-09-05T10:10:00',
  },
  {
    id: 'V20260905002',
    patientName: '郑昊',
    department: '儿科',
    diagnosis: '急性扁桃体炎',
    visitTime: '2026-09-05T16:45:00',
  },
]

const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

export async function mockGetVisitList(): Promise<VisitRecord[]> {
  await delay(300)
  return VISITS.map((visit) => ({ ...visit }))
}

export async function mockGetVisitById(id: string): Promise<VisitRecord | undefined> {
  await delay(200)
  const found = VISITS.find((visit) => visit.id === id)
  return found ? { ...found } : undefined
}
