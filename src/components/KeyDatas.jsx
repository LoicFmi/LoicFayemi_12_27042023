import React, { useState, useEffect } from 'react';
import { getData } from '../utils/userService';
import { useParams } from 'react-router';
import calories from '../assets/svg/calories.svg';
import proteins from '../assets/svg/proteins.svg';
import carbohydrates from '../assets/svg/carbohydrates.svg';
import lipids from '../assets/svg/lipids.svg';
import { mainDataModel } from '../utils/dataModels';

export default function KeyDatas() {
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
    <React.Fragment>
      <div className="dashboard__keydatas__card">
        <div className="dashboard__keydatas__card__img dashboard__keydatas__card__calories">
          <img src={calories} alt="calories" />
        </div>
        <div className="dashboard__keydatas__card__infos">
          <h2>{data.calorieCount}kCal</h2>
          <p>Calories</p>
        </div>
      </div>
      <div className="dashboard__keydatas__card">
        <div className="dashboard__keydatas__card__img dashboard__keydatas__card__proteins">
          <img src={proteins} alt="proteines" />
        </div>
        <div className="dashboard__keydatas__card__infos">
          <h2>{data.proteinCount}g</h2>
          <p>Proteines</p>
        </div>
      </div>
      <div className="dashboard__keydatas__card">
        <div className="dashboard__keydatas__card__img dashboard__keydatas__card__carbohydrates">
          <img src={carbohydrates} alt="carbohydrates" />
        </div>
        <div className="dashboard__keydatas__card__infos">
          <h2>{data.carbohydrateCount}g</h2>
          <p>Glucides</p>
        </div>
      </div>
      <div className="dashboard__keydatas__card">
        <div className="dashboard__keydatas__card__img dashboard__keydatas__card__lipids">
          <img src={lipids} alt="lipids" />
        </div>
        <div className="dashboard__keydatas__card__infos">
          <h2>{data.lipidCount}g</h2>
          <p>Lipides</p>
        </div>
      </div>
    </React.Fragment>
  );
}
