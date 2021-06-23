import AsyncStorage from '@react-native-async-storage/async-storage';

const storeUserData = async value => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('user', jsonValue);
    console.log('this is AsyncStorage:');
  } catch (e) {
    console.log("can't set data");
  }
};

const getUserData = async user => {
  const jsonValue = await AsyncStorage.getItem(user);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

// const storeAgendaData = async data => {
//   try {
//     const jsonValue = JSON.stringify(data);
//     // await AsyncStorage.setItem(data.name, data.hasItem);
//     await AsyncStorage.setItem(data.name, jsonValue);
//   } catch (e) {
//     console.log("can't set data");
//   }
// };

// const getAgendaData = async value => {
//   const jsonValue = await AsyncStorage.getItem(value);
//   // const jsonValue = await AsyncStorage.
//   return jsonValue != null ? JSON.parse(jsonValue) : null;
// };

// const getShowItem = async itemName => {
//   const jsonValue = await AsyncStorage.getItem(value);
//   return jsonValue != null ? JSON.parse(jsonValue) : null;
// };

export {AsyncStorage, storeUserData, getUserData};
