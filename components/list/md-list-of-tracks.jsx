import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function MdListOfTracks({ tracks }) {
    return (
        <div className="hidden md:flex flex-col">
            <div className="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b sm:rounded-lg">
                        <table className="min-w-full">
                            <thead className='bg-secondary-default'>
                                <tr>
                                    <th scope="col"
                                        className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'>
                                    </th>
                                    <th scope="col"
                                        className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'>

                                    </th>
                                    <th scope="col"
                                        className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'>
                                        Artists
                                                    </th>
                                    <th scope="col"
                                        className='px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-white'>
                                        Album
                                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y">
                                {tracks.map((track) => (
                                    <tr key={track.id}>
                                        <td className="pl-6 py-3 text-center">
                                            <a href={track.external_urls.spotify} target="_blank" rel="noopener">
                                                <FontAwesomeIcon icon={faPlay} className='text-secondary-default' />
                                            </a>
                                        </td>
                                        <td className="px-6 py-3">
                                            <div className="flex items-center">
                                                {
                                                    track.album.images[0].url &&
                                                    <div className="flex-shrink-0 h-10 w-10">
                                                        <Image
                                                            src={track.album.images[0].url}
                                                            alt={track.album.name}
                                                            className="rounded-full"
                                                            width={40}
                                                            height={40}
                                                        />
                                                    </div>
                                                }
                                                <div className="ml-4">
                                                    <div className="px-6 py-4 text-sm font-bold text-secondary-default">
                                                        {track.name}
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className='px-6 py-3 text-sm text-secondary-light'>
                                            {
                                                track.artists.map((artist, index, arr) => (
                                                    <p key={artist.id} className={index !== arr.length - 1 ? 'pb-1 m-0' : 'm-0'}>
                                                        {artist.name}
                                                    </p>
                                                ))
                                            }
                                        </td>
                                        <td className='px-6 py-3'>
                                            <span className='text-sm text-secondary-light'>{track.album.name}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}