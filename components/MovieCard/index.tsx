/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Rating } from '@mui/material';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Link from 'next/link';

import { JSONParser } from '../../utils';

import styles from './Card.module.css';
import { StarIcon } from '../../styles';

export const MovieCard = ({ movie }) => {
	const [iconClick, setIconClick] = useState(false);

	const addFavouritesFilmsInStorage = (id: string) => {
		localStorage.setItem('favourites_movie', id);
	};

	const addOnFavourite =
		(id: number) => (e: { preventDefault: () => void }) => {
			e.preventDefault();
			const localStorageData = JSONParser(
				localStorage.getItem('favourites_movie')
			);
			if (iconClick) {
				setIconClick(false);
				if (localStorageData && localStorageData.length) {
					addFavouritesFilmsInStorage(
						JSON.stringify(
							localStorageData?.filter((item: number) => item !== id)
						)
					);
				}
			} else {
				setIconClick(true);
				if (!localStorageData) {
					addFavouritesFilmsInStorage(JSON.stringify([id]));
				} else {
					addFavouritesFilmsInStorage(
						JSON.stringify([...localStorageData, id])
					);
				}
			}
		};

	useEffect(() => {
		const localStorageData = JSONParser(
			localStorage.getItem('favourites_movie')
		);
		localStorageData?.forEach(
			(id: number) => id === movie.id && setIconClick(true)
		);
	}, [movie.id]);

	return (
		<div className={styles.wrapper_movie_card}>
			<div className={styles.card}>
				<div className={styles.front}>
					<img
						src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
						width={'100%'}
						height={'100%'}
						alt="poster"
					/>
					<div className={styles.rating}>
						<Rating
							name="rating"
							value={movie?.vote_average}
							readOnly
							size="medium"
							max={10}
						/>
						<span>({movie?.vote_average})</span>
					</div>
				</div>
				<Link
					href={`http://www.themoviedb.org/movie/${movie.id}`}
					passHref={true}
				>
					<div className={styles.back}>
						<StarIcon onClick={addOnFavourite(movie.id)}>
							{iconClick ? <StarRoundedIcon /> : <StarOutlineRoundedIcon />}
						</StarIcon>
						<h2>{movie?.title}</h2>
						<span>{movie?.overview}</span>
						<h3>Date release: {movie?.release_date}</h3>
					</div>
				</Link>
			</div>
		</div>
	);
};
