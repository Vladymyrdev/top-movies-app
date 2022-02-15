import React, { useState } from 'react';
import { Rating } from '@mui/material';
import StarOutlineRoundedIcon from '@mui/icons-material/StarOutlineRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import Link from 'next/link';

import styles from './Card.module.css';
import { StarIcon } from './styles';

export const MovieCard = ({ movie }) => {
	const [iconClick, setIconClick] = useState(true);

	const addOnFavourite = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		setIconClick((prev) => !prev);
	};

	return (
		<Link href={`http://www.themoviedb.org/movie/${movie.id}`}>
			<div className={styles.wrapper_movie_card}>
				<div className={styles.card}>
					<div className={styles.front}>
						<img
							src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
							width={'100%'}
							height={'100%'}
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
					<div className={styles.back}>
						<StarIcon onClick={addOnFavourite}>
							{iconClick ? <StarOutlineRoundedIcon /> : <StarRoundedIcon />}
						</StarIcon>
						<h2>{movie.title}</h2>
						<span>{movie?.overview}</span>
						<h3>Date release: {movie?.release_date}</h3>
					</div>
				</div>
			</div>
		</Link>
	);
};
