import type { VisitRecord } from '@/types/visit'
import { mockGetVisitById, mockGetVisitList } from '@/mock/visits'

export function getVisitList(): Promise<VisitRecord[]> {
  return mockGetVisitList()
}

export function getVisitById(id: string): Promise<VisitRecord | undefined> {
  return mockGetVisitById(id)
}
