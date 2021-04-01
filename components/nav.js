import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

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
                            <a className='text-base uppercase font-bold md:text-base'>
                                <FontAwesomeIcon icon={faInfoCircle} size='lg' />
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
