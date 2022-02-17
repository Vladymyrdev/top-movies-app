import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import StarRoundedIcon from '@mui/icons-material/StarRounded';

import { MovieCard } from '../components/MovieCard/index';
import { Pagination } from '../components/Pagination';
import { Filter } from '../components/Filter';
import { Loader } from '../components/Loader';
import { API_KEY, API_URL } from './api/constants';
import { MovieType } from '../types';

import styles from '../styles/Home.module.css';
import { FavouritesIcon } from '../styles';
import { Footer } from '../components/Footer';

export default function Home() {
	const [pageNum, setPageNum] = useState(1);
	const [movies, setMovies] = useState<MovieType[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [valueOfSort, setValueOfSort] = useState('descending');
	const router = useRouter();

	useEffect(() => {
		const sortingRateCheck =
			valueOfSort === 'descending' ? pageNum : 26 - pageNum;
		setIsLoading(true);
		axios
			.get(
				`https://${API_URL}/3/movie/top_rated?api_key=${API_KEY}&page=${sortingRateCheck}`
			)
			.then(({ data }) => {
				setMovies(data?.results);
				router.push(`/?page=${pageNum}`);
				setIsLoading(false);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pageNum, valueOfSort]);

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
			<Footer />
		</div>
	);
}
