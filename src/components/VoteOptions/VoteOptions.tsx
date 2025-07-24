
import css from './VoteOptions.module.css';
import type { VoteType } from '../types/votes';

interface VoteOptionsProps {
    onVote: (type: VoteType) => void;
    resetVotes: () => void;
    totalVotes: number;
}

export default function VoteOptions({ onVote, resetVotes, totalVotes }: VoteOptionsProps) {

    return (
        <>
            <div className={css.container}>
                <button onClick={() => onVote('good')} className={css.button}>Good</button>
                <button onClick={() => onVote('neutral')} className={css.button}>Neutral</button>
                <button onClick={() => onVote('bad')} className={css.button}>Bad</button>
                {totalVotes > 0 && (<button onClick={resetVotes} className={`${css.button} ${css.reset}`}>Reset</button>)}
            </div>
        </>
    )
}
