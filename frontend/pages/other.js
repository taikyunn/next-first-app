import Link from "next/link"
import other from '@/styles/Other.module.css'

export default function Other() {
  return(
    <>
      <h1 className={other.h1}>Next.js</h1>
      <p className={other.p}>This is other page.</p>
      <hr />
      <div>
        <Link href="/">
          &lt;&lt;Back to Index page
        </Link>
      </div>
    </>
  )
}
