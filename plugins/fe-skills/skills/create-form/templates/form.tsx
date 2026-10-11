// Thêm 'use client' ở dòng đầu nếu là Next.js App Router.
// Thay Button/Input/Textarea bằng component UI và wrapper field của dự án nếu có.
import { useId, useRef, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  __camelName__Schema,
  EMPTY___NAME___FORM,
  type __Name__FormInput,
  type __Name__FormValues
} from './__name__-schemas'

export interface __Name__FormProps {
  defaultValues?: __Name__FormInput
  /** Sends the values; throw to show the error above the buttons. Usually a mutation's mutateAsync. */
  onSubmit: (values: __Name__FormValues) => Promise<void>
  onCancel?: () => void
}

export function __Name__Form ({ defaultValues = EMPTY___NAME___FORM, onSubmit, onCancel }: __Name__FormProps) {
  const id = useId()
  const [error, setError] = useState<string | null>(null)
  // Set synchronously so a fast double-click cannot send twice before the button disables.
  const submitting = useRef(false)
  const form = useForm<__Name__FormInput, unknown, __Name__FormValues>({
    resolver: zodResolver(__camelName__Schema),
    defaultValues
  })
  const { errors, isSubmitting: busy } = form.formState

  async function submit (values: __Name__FormValues) {
    if (submitting.current) return
    submitting.current = true
    setError(null)

    try {
      await onSubmit(values)
      form.reset(form.getValues())
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Không thể lưu. Vui lòng thử lại.')
    } finally {
      submitting.current = false
    }
  }

  return (
    <form className='flex flex-col gap-4' noValidate onSubmit={form.handleSubmit(submit)}>
      <div className='flex flex-col gap-2'>
        <label htmlFor={`${id}-name`}>Tên <span aria-hidden='true'>*</span></label>
        <Input
          id={`${id}-name`}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? `${id}-name-error` : undefined}
          disabled={busy}
          maxLength={200}
          {...form.register('name')}
        />
        {errors.name ? <p id={`${id}-name-error`} role='alert' className='text-xs text-destructive'>{errors.name.message}</p> : null}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor={`${id}-phone`}>Số điện thoại <span aria-hidden='true'>*</span></label>
        <Input
          id={`${id}-phone`}
          type='tel'
          aria-invalid={Boolean(errors.phoneNumber)}
          aria-describedby={errors.phoneNumber ? `${id}-phone-error` : undefined}
          disabled={busy}
          {...form.register('phoneNumber')}
        />
        {errors.phoneNumber
          ? <p id={`${id}-phone-error`} role='alert' className='text-xs text-destructive'>{errors.phoneNumber.message}</p>
          : null}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor={`${id}-note`}>Ghi chú</label>
        <Textarea id={`${id}-note`} disabled={busy} rows={3} {...form.register('note')} />
      </div>
      <div className='flex flex-col gap-3'>
        {error ? <p role='alert' className='text-sm text-destructive'>{error}</p> : null}
        <div className='flex justify-end gap-2'>
          {onCancel ? <Button disabled={busy} onClick={onCancel} type='button' variant='outline'>Hủy</Button> : null}
          <Button disabled={busy} type='submit'>{busy ? 'Đang lưu…' : 'Lưu'}</Button>
        </div>
      </div>
    </form>
  )
}
