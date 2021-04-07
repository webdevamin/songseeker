import Link from "next/link";

export default function Nav() {
    return (
        <header className='pb-5'>
            <nav className='flex justify-between'>
                <Link href='/'>
                    <a className='text-lg uppercase font-bold md:text-2xl'>
                        {process.env.NEXT_PUBLIC_APP_NAME}
                    </a>
                </Link>
                <ul>
                    <li>
                        <Link href='/about'>
                            <a className='text-base uppercase font-bold md:text-xl 
                            border-2 rounded-full h-7 w-7 border-secondary-default bg-secondary-default text-white
                            flex justify-center items-center'>
                                ?
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
