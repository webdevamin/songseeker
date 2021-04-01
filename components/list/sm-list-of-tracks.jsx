import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faUser, faCompactDisc, faFont } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export default function SmListOfTracks({ tracks }) {
    const renderArtists = (track) => {
        const artists = track.artists;
        const countArtists = track.artists.length - 1;

        if (countArtists > 1) {
            return `${artists[0].name} and ${countArtists} more`;
        }

        return artists[0].name;
    }

    return (
        <div className="grid md:hidden grid-cols-1 sm:grid-cols-2 gap-3">
            {
                tracks.map((track) => (
                    <div key={track.id} className='card'>
                        <div className='img-container'>
                            <Image
                                src={track.album.images[0].url}
                                alt={track.album.name}
                                layout='responsive'
                                width={400}
                                height={320}
                            />
                        </div>
                        <div className='info-container border-t border-white bg-secondary-default flex 
                        text-white h-16 items-center'>
                            <div className="play flex flex-col 
                            justify-center h-full px-3 border-r border-white">
                                <a href={track.external_urls.spotify} target="_blank" rel="noopener">
                                    <FontAwesomeIcon icon={faPlayCircle} className='text-white' size='2x' />
                                </a>
                            </div>
                            <div className="description-container text-xs flex-grow
                            overflow-hidden whitespace-nowrap overflow-ellipsis px-3">
                                <div className="description mb-0.5 
                                overflow-ellipsis whitespace-nowrap overflow-hidden">
                                    <FontAwesomeIcon icon={faFont} className='text-white mr-2' />
                                    <span>
                                        {track.name}
                                    </span>
                                </div>
                                <div className="description mb-0.5 
                                overflow-ellipsis whitespace-nowrap overflow-hidden">
                                    <FontAwesomeIcon icon={faUser} className='text-white mr-2' />
                                    <span>{renderArtists(track)}</span>
                                </div>
                                <div className="description 
                                overflow-ellipsis whitespace-nowrap overflow-hidden">
                                    <FontAwesomeIcon icon={faCompactDisc} className='text-white mr-2' />
                                    <span>{track.album.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}