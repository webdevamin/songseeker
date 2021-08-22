import Layout from "../../components/layout"
import MdListOfTracks from "../../components/list/md-list-of-tracks"
import SmListOfTracks from "../../components/list/sm-list-of-tracks"
import Error from "../../components/error"
import Loader from "../../components/loader"
import { getTracks } from "../../services/trackService"
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReactPaginate from 'react-paginate'

export default function Query() {
    const router = useRouter();
    const { query } = router.query;

    const subtitle = query ? `Tracks containing '${query}'` : `All tracks with entered keywords`;
    const description = query ? `List of tracks where artists, albums, titles and lyrics contain '${query}'` :
        `List of tracks where artists, albums, titles and lyrics contain entered keywords`;

    const [data, setData] = useState(null);
    const [tracks, setTracks] = useState([]);
    const [countTracks, setCountTracks] = useState(null);
    const [limit, setLimit] = useState(null);

    const [isSpotifyError, setIsSpotifyError] = useState(false);

    useEffect(() => {
        if (query) {
            getTracks(query, 0).then((res) => {
                if (res) {
                    if (res.data.tracks.total > 1000) {
                        localStorage.setItem('overload', true);
                        router.push('/');
                    }

                    setIsSpotifyError(false);

                    setData(res);
                    setLimit(res.data.tracks.limit);
                    setTracks(res.data.tracks.items);
                    setCountTracks(res.data.tracks.total);
                }
                else {
                    setIsSpotifyError(true);
                }
            });
        }
    }, [query]);

    const handlePageClick = ({ selected }) => {
        getTracks(query, selected * limit).then((res) => {
            res ? setIsSpotifyError(false) : setIsSpotifyError(true);

            setTracks(res.data.tracks.items);
            setCountTracks(res.data.tracks.total);
        });
    }

    const renderTracks = () => {
        if (isSpotifyError) return <Error />
        if (!data) return <Loader />
        if (data) {
            return (
                <main className='pb-14'>
                    <h1 className='text-sm md:text-lg mb-5 font-normal'>
                        <span className='font-bold'>
                            {countTracks}
                        </span> tracks found containing <span className='font-bold'>'{query}'</span>
                    </h1>
                    <MdListOfTracks tracks={tracks} />
                    <SmListOfTracks tracks={tracks} />
                    {
                        countTracks > limit &&
                        <ReactPaginate
                            previousLabel={String.fromCharCode(10216)}
                            nextLabel={String.fromCharCode(10217)}
                            breakLabel={'...'}
                            pageCount={(countTracks / limit)}
                            marginPagesDisplayed={1}
                            pageRangeDisplayed={1}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination pt-5'}
                            subContainerClassName={'pages pagination'}
                            pageClassName={''}
                            previousClassName={'prev'}
                            nextClassName={'next'}
                            breakClassName={'break'}
                            activeClassName={'active'}
                            activeLinkClassName={'text-secondary-default border-secondary-default bg--transparent'}
                            breakLinkClassName={'text-white border-2 border-secondary-default bg-secondary-default'}
                            pageLinkClassName={'text-white border-2 border-secondary-default bg-secondary-default'}
                            previousLinkClassName={'text-white border-2 border-secondary-default bg-secondary-default'}
                            nextLinkClassName={'text-white border-2 border-secondary-default bg-secondary-default'}
                            eventListener={window.scrollTo({ top: 0 })}
                        />
                    }
                </main>
            )
        }
    };

    return (
        <Layout subtitle={subtitle} description={description}>
            {renderTracks()}
        </Layout>
    )
}