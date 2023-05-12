import React from 'react';
import { useState, useEffect } from 'react';
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import blackDot from '../assets/svg/black-dot.svg';
import orangeDot from '../assets/svg/orange-dot.svg';

export default function DailyActivity() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const data = async () => {
      const fetch = await getData('USER_ACTIVITY', id);
      setData(fetch.data.sessions);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;
  for (let i = 0; i < data.length; i++) {
    data[i].day = i + 1;
  }
  const CustomTooltip = ({ active, payload }) => {
    if (active) {
      return (
        <div className="daily-activity-tooltip">
          <p className="daily-activity-tooltip__value">{payload[0].value}kg</p>
          <p className="daily-activity-tooltip__value">
            {payload[1].value}Kcal
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="daily-activity">
      <div className="daily-activity__header">
        <h2>Activité quotidienne</h2>
        <div className="daily-activity__header__legend">
          <div className="daily-activity__header__legend__item">
            <img src={blackDot} alt=""></img>
            <p>Poids (kg)</p>
          </div>
          <div className="daily-activity__header__legend__item">
            <img src={orangeDot} alt=""></img>
            <p>Calories brûlées (kCal)</p>
          </div>
        </div>
      </div>
      <ResponsiveContainer height={200}>
        <BarChart data={data} barGap={8} barCategoryGap={1}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="day"
            tickLine={false}
            tick={{ fontSize: 14, fill: '#9B9EAC' }}
            dy={16}
            stroke="1 1"
          />
          <YAxis
            yAxisId="kilogram"
            dataKey="kilogram"
            type="number"
            domain={['dataMin - 3', 'dataMax + 3']}
            tickCount="4"
            axisLine={false}
            orientation="right"
            tickLine={false}
            tick={{ fontSize: 14, fill: '#9B9EAC' }}
            dx={15}
          />
          <YAxis
            yAxisId="calories"
            dataKey="calories"
            type="number"
            domain={['dataMin - 20', 'dataMax + 20']}
            hide={true}
          />
          <Tooltip
            content={<CustomTooltip />}
            wrapperStyle={{ outline: 'none' }}
          />
          <Bar
            yAxisId="kilogram"
            dataKey="kilogram"
            fill="#282D30"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
          <Bar
            yAxisId="calories"
            dataKey="calories"
            fill="#E60000"
            barSize={7}
            radius={[50, 50, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
