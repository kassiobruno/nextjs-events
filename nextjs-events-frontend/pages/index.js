import Link from 'next/link'
import Layout from '@/components/Layout'

export default function HomePage() {
  return (
    <Layout>
      <h1>Próximos Eventos</h1>
      <Link href='/about'>Sobre</Link>
    </Layout>
  )
}
