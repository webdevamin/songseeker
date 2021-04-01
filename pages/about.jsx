import Layout from "../components/layout";

export default function About() {
    const subtitle = "About";
    const description = `Read more about ${process.env.NEXT_PUBLIC_APP_NAME}: what it is, how to use and more.`;

    return (
        <Layout subtitle={subtitle} description={description}>
            <main className="about pt-10 pb-14">
                <section>
                    <h1>What is {process.env.NEXT_PUBLIC_APP_NAME}</h1>
                    <p>
                        You've heard a fantastic song. You want to put it to your playlist but don't know the title of it.
                        You could use Shazam: hum to find the desired song. But what if you knew some words used in the lyrics from heart?
                        This app is made for it: just <strong>type a string of keywords, get that favorite track</strong> and save it to your playlist!
                        </p>
                </section>
                <section>
                    <article>
                        <h1>Usage</h1>
                        <p>
                            Type a string of keywords in the search bar, press enter and voilà! You get a <strong>list of tracks matching that text</strong>.
                            The system finds them by author name, title, lyrics and album.
                            Make sure you <strong>don't type short and/or vague keywords</strong> like "feel like" or "beautiful".
                            Thousands or possibly millions of tracks would show up on your screen which is not even worth finding the song you're looking for.
                            Furthermore, <strong>the maximum amount of songs to provide is 1000</strong>.
                            If that's the case, you will be redirected to the homepage with a proper message.
                    </p>
                        <p>
                            A good example of usage would be like this: typing "stand up join us" in the search bar because, let's say this string of keywords
                            is used frequently in the track you were listening to. So it's easier to remember.
                            As of now (March 2021) there are 4 tracks containing this string.
                    </p>
                    </article>
                    <article>
                        <h2>Important to know</h2>
                        <p>
                            A string of keywords is <strong>considered as one</strong>!
                            Which means that the system takes the string as a whole and <strong>does not consider every keyword as a tag</strong>.
                        </p>
                    </article>
                </section>
            </main>
        </Layout>
    )
}