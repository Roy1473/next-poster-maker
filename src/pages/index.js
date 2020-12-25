import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { useState } from "react";

const IMAGEPATH = "https://image.tmdb.org/t/p/w300";
const APIURL = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&sort_by=popularity.desc&page=1`;
export const getStaticProps = async () => {
  const res = await fetch(APIURL);
  const data = await res.json();
  return { props: { results: data.results } };
};

const Home = ({ results }) => {
  return (
    <div>
      <Header></Header>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
