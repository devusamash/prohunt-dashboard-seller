

const initialState = {
  loading: false,
  user: {},
  isLoaded: false,
  message: "",
};
const User = (state = initialState, action) => {
  switch (action.type) {
    case "User registered":
      localStorage.setItem("Token", `${action.response.headers.authorization}`);
      return {
        ...state,
        isLoaded: true,
        user: action.response,
        message: action.message,
      };

    case "User registered Error":
      console.log(action.error);
      return { ...state, user: action.error, message: action.message };

    case "Login":
      return { ...state, loading: true };

    case "User_Logged_In_Success":
      console.log("User_Logged_In_Success");
      localStorage.removeItem("Token");
      localStorage.setItem("Token", action.response.headers.authorization);
      return {
        ...state,
        isLoaded: true,
        user: action.response.data,
        message: action.message,
        loading: false,
      };

    case "User_Logged_In_Error":
      console.log("User_Logged_In_Error");
      return {
        ...state,
        isLoaded: false,
        user: {},
        message: action.message,
        loading: false,
      };

    case "User_Logged_Out_Success":
      localStorage.removeItem("Token");
      return {
        ...state,
        isLoaded: false,
        user: {},
        message: action.message,
        loading: false,
      };
    case "user-loaded":
        console.log("user-loaded")
        return{
            ...state,
            user: action.response.data
        }
    case "user-not-loaded":
      console.log("user-not-loaded")
      return{
        ...state
      }
    default: {
      console.log("default");
      return state;
    }
  }
};

export default User;
