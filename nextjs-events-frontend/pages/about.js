import Link from "next/link"
import Layout from "@/components/Layout"

export default function AboutPage() {
  return (
    <Layout title='About DJ Events'>
      <h1>About</h1>
      <p>Esse é um App para encontrar eventos de DJs e outros eventos musicais</p>
      <p>Versao: 1.0.0</p>
      <Link href="/">Home</Link>
    </Layout>
  )
}
