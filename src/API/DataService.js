import axios from "axios";

 //const BaseUrl = 'https://quiet-fjord-82565.herokuapp.com/'
const BaseUrl = "https://serene-thicket-03420.herokuapp.com/";

const UserToken = localStorage.getItem("Token");
async function postData(url = "", payLoad = {}) {
  const response = await axios.post(url, payLoad, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: `${UserToken}`,
    },
    body: payLoad,
  });
  return response;
}

const getData = async (url = "") => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `${UserToken}`,
      },
    });

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    return response;
  } catch (e) {
    return e;
  }
};

const deleteData = async (url = "") => {
  try {
    const response = await axios.delete(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `${UserToken}`,
      },
    });
    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }
    console.log(response);
    return response;
  } catch (e) {
    return e;
  }
};

export { BaseUrl, postData, getData, deleteData };
