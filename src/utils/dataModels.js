export class mainDataModel {
  constructor(
    id,
    firstName,
    lastName,
    age,
    todayScore,
    calorieCount,
    proteinCount,
    carbohydrateCount,
    lipidCount,
    userId,
    day,
    kilogram,
    calories
  ) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.todayScore = todayScore;
    this.calorieCount = calorieCount;
    this.proteinCount = proteinCount;
    this.carbohydrateCount = carbohydrateCount;
    this.lipidCount = lipidCount;
    this.userId = userId;
    this.day = day;
    this.kilogram = kilogram;
    this.calories = calories;
  }

  static fromApiData(apiData) {
    return new mainDataModel(
      apiData.id,
      apiData.userInfos.firstName,
      apiData.userInfos.lastName,
      apiData.userInfos.age,
      apiData.todayScore,
      apiData.keyData.calorieCount,
      apiData.keyData.proteinCount,
      apiData.keyData.carbohydrateCount,
      apiData.keyData.lipidCount
    );
  }
}

export class sessionsModel {
  constructor(userId, sessions) {
    this.userId = userId;
    this.sessions = sessions;
  }

  static fromApiData(apiData) {
    return new sessionsModel(apiData.userId, apiData.sessions);
  }
}

export class performanceModel {
  constructor(userId, kind, data) {
    this.userId = userId;
    this.kind = kind;
    this.data = data;
  }

  static fromApiData(apiData) {
    return new performanceModel(apiData.userId, apiData.kind, apiData.data);
  }
}
