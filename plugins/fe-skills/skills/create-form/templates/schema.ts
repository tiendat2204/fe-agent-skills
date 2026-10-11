import { z } from 'zod'

export const __camelName__Schema = z.object({
  name: z.string().trim()
    .min(1, 'Vui lòng nhập tên.')
    .max(200, 'Tên tối đa 200 ký tự.'),
  phoneNumber: z.string().trim()
    .min(9, 'Số điện thoại cần ít nhất 9 ký tự.')
    .max(30, 'Số điện thoại tối đa 30 ký tự.')
    .regex(/^[+\d][\d\s()-]*$/, 'Số điện thoại không hợp lệ.'),
  note: z.string().trim()
    .max(500, 'Ghi chú tối đa 500 ký tự.')
    .transform(value => value === '' ? null : value)
    .optional()
})

export type __Name__FormInput = z.input<typeof __camelName__Schema>

export type __Name__FormValues = z.output<typeof __camelName__Schema>

export const EMPTY___NAME___FORM: __Name__FormInput = {
  name: '',
  phoneNumber: '',
  note: ''
}
