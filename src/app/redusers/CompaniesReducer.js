const initialState = {
  loading: true,
  data: [
    {
      id: 0,
      name: "",
      addess: "",
      contactnumber: "",
    },
  ],
};
const Companies = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ERROR":
      return { ...state, data: action.data };

    case "DATA_RECIEVED":
      return { ...state, data: action.data };

    default: {
      console.log("default");
      return state;
    }
  }
};

export default Companies;
