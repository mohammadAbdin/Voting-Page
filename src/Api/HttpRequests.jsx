import axios from "axios";

const url = "https://6666adf4a2f8516ff7a45d07.mockapi.io/users";
const postAccounts = async (email, password, votedTo, isAdmin) => {
  try {
    const response = await axios.post(url, {
      email,
      password,
      votedTo,
      isAdmin,
    });

    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
const getAccounts = async () => {
  try {
    const response = await axios.get(url);

    console.log("Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
const putAccounts = async (userId, email, password, votedTo, isAdmin) => {
  try {
    const response = await axios.put(`${url}/${userId}`, {
      email,
      password,
      votedTo,
      isAdmin,
    });

    console.log("Response:", response.data);
  } catch (error) {
    console.error("Error:", error);
  }
};
export { postAccounts, getAccounts, putAccounts };
