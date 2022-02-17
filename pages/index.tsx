/* eslint-disable react-hooks/exhaustive-deps */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import { MovieCard } from '../components/MovieCard/index';
import { Pagination } from '../components/Pagination';
import { Filter } from '../components/Filter';
import { API_KEY, API_URL } from './api/constants';
import { MovieType } from '../types';

import styles from '../styles/Home.module.css';
import { FavouritesIcon } from '../styles';
import { Loader } from '../components/Loader';

// TODO:
// ● You should be able to sort in order (ASC / DESC)
// ● You should provide a link to heroku or some other hosting with a functional app.

export default function Home() {
	const [pageNum, setPageNum] = useState(1);
	const [movies, setMovies] = useState<MovieType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [valueOfSort, setValueOfSort] = useState('ascending');
	const router = useRouter();

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(
				`https://${API_URL}/3/movie/top_rated?api_key=${API_KEY}&page=${pageNum}`
			)
			.then(({ data }) => {
				setMovies(data?.results);
				router.push(`/?page=${pageNum}`);
				setIsLoading(false);
			});
	}, [pageNum]);

	const handleChangeSorting = (
		event: React.MouseEvent<HTMLElement>,
		newAlignment: string
	) => {
		setValueOfSort(newAlignment);
	};

	const nextPage = () => {
		pageNum <= 24 && setPageNum(pageNum + 1);
	};
	const prevPage = () => {
		pageNum > 1 && setPageNum(pageNum - 1);
	};

	const renderMovies = () =>
		movies?.map((movie) => <MovieCard key={movie.id} movie={movie} />);

	return (
		<div className={styles.container}>
			<Head>
				<title>Top 500 movies in TMDB</title>
				<meta name="description" content="Top 500 movies in TMDB" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Top 500 movies in TMDB</h1>
				<Link href="/favourites" passHref={true}>
					<FavouritesIcon>
						<span>My favourites</span>
						<StarRoundedIcon />
					</FavouritesIcon>
				</Link>
				<Filter
					valueOfSort={valueOfSort}
					handleChangeSorting={handleChangeSorting}
				/>
				<div className={styles.content}>
					{isLoading ? <Loader /> : renderMovies()}
				</div>
				<Pagination pageNum={pageNum} nextPage={nextPage} prevPage={prevPage} />
			</main>

			<footer className={styles.footer}>
				<a
					href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					Powered by{' '}
					<span className={styles.logo}>
						<Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
					</span>
				</a>
			</footer>
		</div>
	);
}
