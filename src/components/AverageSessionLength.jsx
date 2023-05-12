import React, { useState, useEffect } from 'react';
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function AverageSessionLength() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const data = async () => {
      const fetch = await getData('USER_AVERAGE_SESSIONS', id);
      const formatData = fetch.data.sessions.map((data) => {
        switch (data.day) {
          case 1:
            return { ...data, day: 'L' };
          case 2:
            return { ...data, day: 'M' };
          case 3:
            return { ...data, day: 'M' };
          case 4:
            return { ...data, day: 'J' };
          case 5:
            return { ...data, day: 'V' };
          case 6:
            return { ...data, day: 'S' };
          case 7:
            return { ...data, day: 'D' };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="average-session-length-tooltip">
          <p className="average-session-length-tooltip__value">
            {payload[0].value}min
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="average-session-length">
      <h2 className="average-session-length__title">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={true}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: 12, fill: 'white', opacity: 0.5 }}
            dy={10}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, 'dataMax + 30']}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.7)"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 4, strokeWidth: 4, stroke: 'white' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
