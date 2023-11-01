import Link from 'next/link'
import "./styles.css"


export default function HomePage() {
  return (
    <div>
        <main
        className="h-screen grid text-white place-items-center p-3">
        <div>
        <h1 className='text-8xl md:text-9xl tracking-wide mb-0 text-center'>PONETE A <br/>PRUEBA</h1>
        <h1 className='text-lg text-[#FF0070] text-center mt-5 md:mt-0'>Realiza tu test informatico sobre:</h1>
        <div className='w-full grid md:px-16 place-items-center gap-5 text-center'>
            <Link href={{
            pathname: '/register',
            query: { theme: 'Software'},
            }}><div className='bg-[#DF0565] mt-5 shadow-[0_0_2px] hover:shadow-white shadow-transparent tracking-wider p-3 w-64 text-4xl rounded-lg
            hover:scale-105 text-white duration-150'>Software</div></Link>
            <Link href={{
            pathname: '/register',
            query: { theme: 'General'},
            }}><div className='bg-[#DF0565] shadow-[0_0_2px] hover:shadow-white shadow-transparent tracking-wider p-3 w-64 text-4xl rounded-lg
            hover:scale-105 text-white duration-150'>General</div></Link>
            <Link href={{
            pathname: '/register',
            query: { theme: 'Hardware'},
            }}><div className='bg-[#DF0565] shadow-[0_0_2px] hover:shadow-white shadow-transparent tracking-wider p-3 w-64 text-4xl rounded-lg
            hover:scale-105 text-white duration-150'>Hardware</div></Link>
        </div>
        </div>
        </main>
        </div>
  )
}
