import React, { useState, useEffect } from 'react';
import { getData } from '../utils/getData';
import { useParams } from 'react-router';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';

export default function TrainingType() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const data = async () => {
      const fetch = await getData('USER_PERFORMANCE', id);
      const formatData = fetch.data.data.map((data) => {
        switch (data.kind) {
          case 1:
            return { ...data, kind: 'Cardio' };
          case 2:
            return { ...data, kind: 'Energie' };
          case 3:
            return { ...data, kind: 'Endurance' };
          case 4:
            return { ...data, kind: 'Force' };
          case 5:
            return { ...data, kind: 'Vitesse' };
          case 6:
            return { ...data, kind: 'Intensité' };
          default:
            return { ...data };
        }
      });
      setData(formatData);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <div className="radar-chart">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid
            gridType="polygon"
            radialLines={false}
            polarRadius={[10, 20, 35, 60, 80]}
          />
          <PolarAngleAxis
            dataKey="kind"
            stroke="white"
            tickLine={false}
            axisLine={false}
            tick={{ fontSize: 10 }}
            tickCount={5}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
