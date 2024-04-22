import { nanoid } from '@/lib/utils'
import { Articles } from '@/components/articles'

export default function IndexPage() {
  const id = nanoid()

  return <Articles />
}
