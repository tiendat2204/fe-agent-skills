// Thêm 'use client' ở dòng đầu nếu là Next.js App Router và component có state, effect hoặc handler.
// Đổi import Card/cn cho khớp thư mục UI của dự án.
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { get__Name__Summary, type __Name__Item } from './__name__-model'

export interface __Name__Props {
  title: string
  items: __Name__Item[]
  /** Chỉ chỉnh bố cục từ ngoài (margin, width); màu và chữ do component giữ. */
  className?: string
}

export function __Name__ ({ title, items, className }: __Name__Props) {
  const summary = get__Name__Summary(items)

  return (
    <Card className={cn(className)}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm text-muted-foreground'>{summary}</p>
      </CardContent>
    </Card>
  )
}
