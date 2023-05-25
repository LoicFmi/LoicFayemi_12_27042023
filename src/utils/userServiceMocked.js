// Get Data from the mocked datas
import {
  userInfos,
  userActivity,
  userPerformance,
  userAverageSessions
} from './mocked_data.js';

export const getData = async (type, id) => {
  let data = [];

  switch (type) {
    case 'USER_MAIN_DATA':
      data = await userInfos(id);
      break;
    case 'USER_ACTIVITY':
      data = await userActivity(id);
      break;
    case 'USER_PERFORMANCE':
      data = await userPerformance(id);
      break;
    case 'USER_AVERAGE_SESSIONS':
      data = await userAverageSessions(id);
      break;
    default:
      console.log("Can't find any data");
  }
  return data;
};
