import axios from "axios";

// const BaseUrl = 'https://quiet-fjord-82565.herokuapp.com/'
const BaseUrl = "https://serene-thicket-03420.herokuapp.com/";

async function postMethod(url = "", payLoad = {}) {
  const response = await axios.post(url, payLoad, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
  return response;
}

const getMethod = async (url = "") => {
  try {
    const response = await axios.get(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (response.status >= 400 && response.status < 600) {
      throw new Error("Bad response from server");
    }

    const json = await response;
    return json;
  } catch (e) {
    return e;
  }
};

const deleteMethod = async (url = "") => {
  try {
    const response = await axios.delete(url, {
      headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `${localStorage.getItem("Token")}`,
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

export { BaseUrl, postMethod, getMethod, deleteMethod };
