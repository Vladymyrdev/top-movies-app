import { Button } from '@mui/material';
import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { JSONParser } from '../utils';
import { API_KEY, API_URL } from './api/constants';
import { MovieCard } from '../components/MovieCard';
import { Loader } from '../components/Loader';
import { Footer } from '../components/Footer';
import { MovieType } from '../types';

import styles from '../styles/Favourites.module.css';

export default function Favorites() {
	const [favouritesFilms, setFavouritesFilms] = useState<MovieType[]>([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getFavouritesFilmsId = JSONParser(
			localStorage.getItem('favourites_movie')
		);
		if (getFavouritesFilmsId !== []) {
			setIsLoading(true);
			getFavouritesFilmsId?.forEach((item: number) => {
				axios
					.get(`https://${API_URL}/3/movie/${item}?api_key=${API_KEY}`)
					.then(({ data }) => setFavouritesFilms((prev) => [...prev, data]))
					.catch((err) =>
						console.log('Error fetch dats from local storage', err)
					);
			});
			setIsLoading(false);
		}
	}, []);

	const renderFavouritesFilms = () =>
		favouritesFilms?.map((movie) => <MovieCard key={movie.id} movie={movie} />);

	const additionalMessage = () => (
		<h3 className={styles.additional_message}>
			You don&apos;t have yet selected films. It&apos;s time to go back and
			review the top rated movies.
		</h3>
	);

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<h1 className={styles.title}>My favourites films</h1>
				{isLoading && favouritesFilms?.length !== 0 ? (
					<Loader />
				) : (
					<div className={styles.content}>
						{favouritesFilms?.length !== 0
							? renderFavouritesFilms()
							: additionalMessage()}
					</div>
				)}
				<Link href="/" passHref>
					<Button
						sx={{ fontFamily: "'Akaya Telivigala', cursive;" }}
						variant="outlined"
					>
						Back to main page
					</Button>
				</Link>
			</div>
			<Footer />
		</div>
	);
}
