import Head from 'next/head'
import Link from "next/link"

export default function Custom404() {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name='description' content='Error 404: The requested page does not exist in this application.' />
                <title>Page not found - {process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <main className='mx-12 md:container md:mx-auto uppercase h-full 
            flex flex-col text-center md:text-left justify-center'>
                <h1 className='font-extrabold text-3xl md:text-7xl m-0'>
                    Page not found!
                    </h1>
                <p className='text-base md:text-2xl normal-case mt-5 mb-7 md:mt-7 md:mb-9'>
                    The page you were looking for does not exist in this application.
                    Time to get back home.
                </p>
                <Link href='/'>
                    <a className='text-lg uppercase font-bold p-2 md:p-4
                    btn_secondary-default md:text-2xl md:w-max'>
                        Back To Home
                    </a>
                </Link>
            </main>
        </>
    )
}