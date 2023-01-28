import Link from "next/link"
import other from '@/styles/Other.module.css'
import Counter from "@/components/Counter"
import Layout from '@/components/Layout'

export default function Other() {
  return(
    <>
      <Layout header="Other" title="Other Page">
        <h1 className={other.h1}>Next.js</h1>
        <p className={other.p}>This is other page.</p>
        <hr />
        <div>
          <Link href="/">
            <button>&lt;&lt;Back to Index page</button>
          </Link>
          <Counter />
        </div>
      </Layout>
    </>
  )
}
