
import css from './VoteOptions.module.css';

interface VoteOptionsProps {
    handleClick: (type: 'good' | 'neutral' | 'bad') => void;
    resetVotes: () => void;
    // total: number;
}

export default function VoteOptions({ handleClick, resetVotes }: VoteOptionsProps) {

    return (
        <>
            <div className={css.container}>
                <button onClick={() => handleClick('good')} className={css.button}>Good</button>
                <button onClick={() => handleClick('neutral')} className={css.button}>Neutral</button>
                <button onClick={() => handleClick('bad')} className={css.button}>Bad</button>
                {resetVotes.length > 0 && <button onClick={resetVotes} className={`${css.button} ${css.reset}`}>Reset</button>}
            </div>
        </>
    )
}
