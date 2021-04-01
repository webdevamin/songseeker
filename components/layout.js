import Head from 'next/head'
import Nav from "./nav";

export default function Layout({ children, description, subtitle }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name='description' content={description} />
                <title>{subtitle && subtitle + ' - '}{process.env.NEXT_PUBLIC_APP_NAME}</title>
            </Head>
            <div id='main-container' className='w-10/12 mx-auto md:container flex flex-col pt-5'>
                <Nav />
                {children}
            </div>
        </>
    )
}
