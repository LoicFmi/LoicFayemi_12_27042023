import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getData } from '../utils/userService';
import { mainDataModel } from '../utils/dataModels';

export default function UserName() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const data = async () => {
      const fetch = await getData('USER_MAIN_DATA', id);
      const userData = fetch.data;
      const formattedData = mainDataModel.fromApiData(userData);
      setData(formattedData);
    };
    data();
  }, [id]);
  if (data.length === 0) return null;

  return (
    <div className="user-name">
      <h1 className="user-name__title">
        Bonjour <span>{data.firstName}</span>
      </h1>
      <p className="user-name__text">
        Félicitation ! Vous avez explosé vos objectifs hier{' '}
        <span role="img" aria-label="clap emoji">
          👏
        </span>
      </p>
    </div>
  );
}
