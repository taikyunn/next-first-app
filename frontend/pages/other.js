import Link from "next/link";

const h1 = {
  fontSize: '60pt',
  fontWeight: 'bold',
  color: 'red',
}

const p ={
  margin: '0px',
  color: '#666',
  fontSize: '16pt',
}

export default function Other() {
  return(
    <>
      <h1 style={h1}>Next.js</h1>
      <p style={p}>This is other page.</p>
      <hr />
      <div>
        <Link href="/">
          &lt;&lt;Back to Index page
        </Link>
      </div>
    </>
  )
}
