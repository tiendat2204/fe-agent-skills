// Logic thuần cho __Name__: không import React, không gọi API, để test không cần DOM.

export interface __Name__Item {
  id: string
  quantity: number
}

export function get__Name__Summary (items: readonly __Name__Item[]): string {
  if (items.length === 0) return 'Chưa có mục nào'

  const total = items.reduce((sum, item) => sum + item.quantity, 0)

  return `${items.length} mục, tổng ${total}`
}
