import { useState } from 'react';
import css from './App.module.css';
import CafeInfo from '../CafeInfo/CafeInfo';
import VoteStats from '../VoteStats/VoteStats';
import VoteOptions from '../VoteOptions/VoteOptions';
import Notification from '../Notification/Notification';

interface Votes {
  good: number,
  neutral: number,
  bad: number,
  total?: number,
  totalFeedback?: number,
}

export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
  });

  const handleClick = (type: 'good' | 'neutral' | 'bad') => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const canReset = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
      totalFeedback: 0,
    });
  };

  const total = votes.good + votes.neutral + votes.bad;
  const totalFeedback = Math.round(votes.good * 100 / total)

  return (
    <div className={css.app}>
      <CafeInfo />
      <VoteOptions
        handleClick={handleClick}
        resetVotes={canReset}
      />
      {total > 0 ? (
        <VoteStats
          total={total}
          good={votes.good}
          neutral={votes.neutral}
          bad={votes.bad}
          procnt={totalFeedback}
        />) : (
        <Notification />
      )}
    </div>
  );
}
