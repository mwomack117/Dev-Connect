// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";

// const initialState = {};

// const middleware = [thunk];

// const store = createStore(
//   rootReducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const initialState = {};

const middleware = [thunk];

if (
  window.navigator.userAgent.includes("Chrome") &&
  !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
    window.navigator.userAgent
  )
) {
  var store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
} else {
  var store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware))
  );
}
export default store;
