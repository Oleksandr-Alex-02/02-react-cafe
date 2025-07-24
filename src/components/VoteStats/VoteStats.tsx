
import styles from './VoteStats.module.css';

interface VoteStatsProps {
    total: number;
    good: number;
    neutral: number;
    bad: number;
    procnt?: number;
}

export default function VoteStats({ total, good, neutral, bad, procnt }: VoteStatsProps) {

    return (
        <div className={styles.container}>
            <p className={styles.stat}>Good: <strong>{good}</strong></p>
            <p className={styles.stat}>Neutral: <strong>{neutral}</strong></p>
            <p className={styles.stat}>Bad: <strong>{bad}</strong></p>
            <p className={styles.stat}>Total: <strong>{total}</strong></p>
            <p className={styles.stat}>Positive: <strong>{procnt}%</strong></p>
        </div>

    );
}