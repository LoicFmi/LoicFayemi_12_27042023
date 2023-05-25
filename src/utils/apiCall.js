import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000`
});

export const userActivity = async id => {
  // try {
  const result = await api.get(`http://localhost:3000/user/${id}/activity`);
  if (result.status === 200) {
    return result.data;
  } else {
  }
  // } catch (e) {
  //   console.log(e);
  // }
};

export const userInfos = async id => {
  // try {
  const result = await api.get(`http://localhost:3000/user/${id}`);
  if (result.status === 200) {
    return result.data;
  }
  // } catch (e) {
  //   console.log(e);
  // }
};

export const userPerformance = async id => {
  // try {
  const result = await api.get(`http://localhost:3000/user/${id}/performance`);
  if (result.status === 200) {
    return result.data;
  }
  // } catch (e) {
  //   console.log(e);
  // }
};

export const userAverageSessions = async id => {
  // try {
  const result = await api.get(
    `http://localhost:3000/user/${id}/average-sessions`
  );
  if (result.status === 200) {
    return result.data;
  }
  // } catch (e) {
  //   console.log(e);
  // }
};
