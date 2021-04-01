import Layout from "../components/layout";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import swal from 'sweetalert';

export default function Home() {
    const [keyword, setKeyword] = useState('');
    const description = process.env.NEXT_PUBLIC_APP_DESCRIPTION;
    const router = useRouter();

    const search = (e) => {
        e.preventDefault();

        router.push(`/songs/${keyword}`);
    }

    useEffect(() => {
        const overload = localStorage.getItem('overload');
        document.getElementById('main-container').classList.add('h-full');
        
        if (overload) {
            swal({
                title: "Too many!",
                text: "The keywords are too vague thus causing thousands of tracks to process. Please type more.",
                icon: "error",
                button: "Close",
            });

            localStorage.removeItem('overload')
        }
    }, [])

    return (
        <Layout description={description}>
            <main className='flex flex-col justify-center flex-grow text-center'>
                <h1 className='text-2xl md:text-4xl font-bold uppercase'>
                    Track a song
                </h1>
                <div className='mt-4 md:mt-5 w-full'>
                    <form onSubmit={search}>
                        <div className='pb-4'>
                            <label htmlFor="keyword_input" className='hidden'>Tag</label>
                            <input type="text" name='tag' id='keyword_input'
                                className='border-2 border-secondary-default
                      rounded-2xl p-1.5 md:p-2 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-5/12'
                                value={keyword} onChange={e => setKeyword(e.target.value)}
                            />
                        </div>
                        <div className='md:hidden'>
                            <label htmlFor='search' className='hidden'>Search</label>
                            <input type="submit" value='Search' id='search'
                                className='p-1.5 border-transparent bg-secondary-default
                                   rounded-2xl text-white md:p-2 w-full md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-5/12'
                            />
                        </div>
                    </form>
                </div>
                <div className='mt-2 hidden md:block font-semibold'>
                    <small>Press enter after typing keywords</small>
                </div>
            </main>
        </Layout>
    )
}