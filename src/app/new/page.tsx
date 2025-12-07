import { HomePage } from '@/pages/HomePage'
import { heroText } from '@/constants/heroText'

export const metadata = {
  title: 'Александр Клочков - Frontend Developer',
  description: heroText,
}

export default function NewDesignPage() {
  return <HomePage />
}
