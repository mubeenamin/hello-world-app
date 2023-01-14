import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })
const a = 40;
export default function Home() {
  return (
    <div>
    <h1>Hello World this is Mubeen Ameen</h1>
    <h3>react compiler and next js compiler {a}</h3>
    <h2>welcome to the web 3 <Link href ="/blog">more read</Link></h2>
    <h2>welcome to the web 3 <Link href ="/contact">contact us</Link></h2>
    </div>
    
  )
}
