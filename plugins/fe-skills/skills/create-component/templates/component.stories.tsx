// Đổi '@storybook/nextjs-vite' thành framework Storybook của dự án (@storybook/react-vite, @storybook/nextjs...).
import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { __Name__ } from '__path__/__name__'

const meta = {
  title: 'Features/__Name__',
  component: __Name__,
  args: {
    title: 'Tiêu đề mẫu',
    items: [
      { id: 'a', quantity: 2 },
      { id: 'b', quantity: 3 }
    ]
  }
} satisfies Meta<typeof __Name__>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

// Mỗi trạng thái hiển thị khác nhau là một story: rỗng, lỗi, đang tải, chữ dài, mobile.
export const Empty: Story = {
  args: { items: [] }
}
