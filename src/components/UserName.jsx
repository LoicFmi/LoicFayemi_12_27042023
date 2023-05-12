import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getData } from '../utils/getData';

export default function UserName() {
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

  return (
    <div className="user-name">
      <h1 className="user-name__title">
        Bonjour <span>{data.userInfos.firstName}</span>
      </h1>
      <p className="user-name__text">
        Félicitation ! Vous avez explosé vos objectifs hier 👏
      </p>
    </div>
  );
}
