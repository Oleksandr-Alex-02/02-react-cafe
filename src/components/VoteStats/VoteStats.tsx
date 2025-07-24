
import styles from './VoteStats.module.css';
import type { Votes } from '../../types/votes';

interface VoteStatsProps {
    votes: Votes;
    total: number;
    positive: number;
}

export default function VoteStats({ votes, total, positive }: VoteStatsProps) {
    const { good, neutral, bad } = votes;

    return (
        <div className={styles.container}>
            <p className={styles.stat}>Good: <strong>{good}</strong></p>
            <p className={styles.stat}>Neutral: <strong>{neutral}</strong></p>
            <p className={styles.stat}>Bad: <strong>{bad}</strong></p>
            <p className={styles.stat}>Total: <strong>{total}</strong></p>
            <p className={styles.stat}>Positive: <strong>{positive}%</strong></p>
        </div>

    );
}