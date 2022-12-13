import { createStore, combineReducers } from "redux";

import CategoryReducer from "./reducers/category.reducer";
import IdeaReducer from "./reducers/idea.reducer";

const RootReducer = combineReducers({
  categories: CategoryReducer,
  ideas: IdeaReducer,
});

export default createStore(RootReducer);
