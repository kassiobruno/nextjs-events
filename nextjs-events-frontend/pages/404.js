import Layout from "@/components/Layout"
import styles from "@/styles/404.module.css"
import Link from "next/link"
import {FaExclamationTriangle} from 'react-icons/fa'

export default function NotFoundPage() {
  return (
    <Layout title="Página não encontrada">
      <div className={styles.error}>
        <h1><FaExclamationTriangle /> 404</h1>
        <h4>Desculpe, não tem nada aqui</h4>      
      <Link href='/'>Voltar para página inicial</Link>
      </div>
    </Layout>
  )
}
