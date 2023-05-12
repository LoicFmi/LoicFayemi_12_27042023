import React, { useState, useEffect } from 'react';
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Score() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const data = async () => {
      const fetch = await getData('USER_MAIN_DATA', id);
      setData(fetch.data);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;
  const score = [
    { value: data.todayScore || data.score },
    { value: 1 - data.todayScore || data.score },
  ];

  console.log(data);
  console.log(data.todayScore);
  console.log(data.score);
  console.log(score);
  console.log(score[0].value);
  return (
    <div className="score">
      <h2 className="score__title">Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={83}
            outerRadius={95}
            startAngle={90}
          >
            {score.map((entry, index) =>
              index === 0 ? (
                <Cell key={`cell-${index}`} cornerRadius={10} fill="#ff0000" />
              ) : (
                <Cell key={`cell-${entry}`} fill="#FBFBFB" />
              )
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="score__text">
        <p className="score__text__value">
          {score[0].value * 100}%<br />
        </p>
        de votre
        <br /> objectif
      </div>
    </div>
  );
}
