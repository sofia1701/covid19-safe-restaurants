import axios from "axios";

const getSaved = async (userID) => {
  try {
    const response = await axios.get(
      `https://covid-safe-api.herokuapp.com/api/v1/favourite?query={"fbUserId":"${userID}"}&populate=restaurant`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getSaved;
