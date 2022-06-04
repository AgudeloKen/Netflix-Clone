import Layout from "../components/Layout";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../utils/request";

const Home = ({
  netflixOriginals,
  trendingNow,
  topRated,
  actionMovies,
  comedyMovies,
  horrorMovies,
  romanceMovies,
  documentaries,
}) => {
  return (
    <Layout>
      <Main movies={netflixOriginals} />
      <div className="min-h-screen space-y-10">
        <Row title="Trending Now" movies={trendingNow} />
        <Row title="Top Rated" movies={topRated} />
        <Row title="Action" movies={actionMovies} />
        <Row title="Comedy" movies={comedyMovies} />
        <Row title="Horror" movies={horrorMovies} />
        <Row title="Romance" movies={romanceMovies} />
        <Row title="Documentaries" movies={documentaries} />
      </div>
    </Layout>
  );
};
export default Home;

export async function getServerSideProps() {
  const [
    netflixOriginals,
    trendingNow,
    topRated,
    actionMovies,
    comedyMovies,
    horrorMovies,
    romanceMovies,
    documentaries,
  ] = await Promise.all([
    fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
    fetch(requests.fetchTrending).then((res) => res.json()),
    fetch(requests.fetchTopRated).then((res) => res.json()),
    fetch(requests.fetchActionMovies).then((res) => res.json()),
    fetch(requests.fetchComedyMovies).then((res) => res.json()),
    fetch(requests.fetchHorrorMovies).then((res) => res.json()),
    fetch(requests.fetchRomanceMovies).then((res) => res.json()),
    fetch(requests.fetchDocumentaries).then((res) => res.json()),
  ]);

  return {
    props: {
      netflixOriginals: netflixOriginals.results,
      trendingNow: trendingNow.results,
      topRated: topRated.results,
      actionMovies: actionMovies.results,
      comedyMovies: comedyMovies.results,
      horrorMovies: horrorMovies.results,
      romanceMovies: romanceMovies.results,
      documentaries: documentaries.results,
    },
  };
}
