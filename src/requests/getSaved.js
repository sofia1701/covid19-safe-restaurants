import axios from "axios";

const getSaved = async (userID) => {
  try {
    const response = await axios.get(
      `http://localhost:4000/api/v1/favourite?query={"fbUserId":"${userID}"}&populate=restaurant`
    );
    return response;
  } catch (err) {
    return err;
  }
};

export default getSaved;
