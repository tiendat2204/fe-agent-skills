// node:test. Với Vitest/Jest: import { describe, it, expect } và đổi assert.equal(a, b) thành expect(a).toBe(b).
import assert from 'node:assert/strict'
import test from 'node:test'
import { get__Name__Summary } from '__path__/__name__-model'

test('get__Name__Summary says there is nothing when the list is empty', () => {
  assert.equal(get__Name__Summary([]), 'Chưa có mục nào')
})

test('get__Name__Summary counts items and adds their quantities', () => {
  assert.equal(get__Name__Summary([
    { id: 'a', quantity: 2 },
    { id: 'b', quantity: 3 }
  ]), '2 mục, tổng 5')
})
