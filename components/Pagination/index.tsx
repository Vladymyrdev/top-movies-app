import React from 'react';
import { PaginationProps } from '../../types';
import styles from './Pagination.module.css';

export const Pagination = ({
	pageNum,
	prevPage,
	nextPage,
}: PaginationProps) => {
	return (
		<div className={styles.navigation}>
			<button
				disabled={pageNum === 1 && true}
				className={styles.prev}
				onClick={prevPage}
			>
				&#8735;
			</button>
			<p>{pageNum}</p>
			<button className={styles.next} onClick={nextPage}>
				&#8735;
			</button>
		</div>
	);
};
