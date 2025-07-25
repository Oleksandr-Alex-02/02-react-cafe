import css from './App.module.css';
import { useState } from 'react';

import type { Votes } from '../../types/votes';
import type { VoteType } from '../../types/votes';

import CafeInfo from '../CafeInfo/CafeInfo';
import VoteStats from '../VoteStats/VoteStats';
import VoteOptions from '../VoteOptions/VoteOptions';
import Notification from '../Notification/Notification';


export default function App() {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onVote = (type: VoteType) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1,
    }));
  };

  const onReset = () => {
    setVotes({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalVotes = votes.good + votes.neutral + votes.bad;
  const positiveRate = totalVotes
    ? Math.round((votes.good / totalVotes) * 100)
    : 0

  return (
    <section className={css.app}>
      <CafeInfo />
      <VoteOptions
        onVote={onVote}
        canReset={totalVotes > 0}
        onReset={onReset}
      />
      {totalVotes > 0 ? (
        <VoteStats
          votes={votes}
          totalVotes={totalVotes}
          positiveRate={positiveRate}
        />) : (
        <Notification />
      )}
    </section>
  );
}
