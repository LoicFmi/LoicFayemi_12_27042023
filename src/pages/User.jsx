import React from 'react';
import UserName from '../components/UserName';
import DailyActivity from '../components/DailyActivity';
import AverageSessionLength from '../components/AverageSessionLength';
import TrainingType from '../components/TrainingType';
import Score from '../components/Score';
import KeyDatas from '../components/KeyDatas';

export default function User() {
  return (
    <React.Fragment>
      <main className="dashboard">
        <UserName />
        <section>
          <DailyActivity />
          <div className="dashboard__3-charts">
            <AverageSessionLength />
            <TrainingType />
            <Score />
          </div>
        </section>
        <aside className="keydatas">
          <KeyDatas />
        </aside>
      </main>
    </React.Fragment>
  );
}
