import { combineReducers } from "redux";
import {AuthReducers} from "./reducers/AuthReducers";
import { PostsReducers } from "./reducers/PostReducers";
import { NewsReducers } from "./reducers/NewsReducers";
import { CommunityReducers } from "./reducers/CommunityReducers";
const rootReducer=combineReducers({
AuthReducers,
PostsReducers,
NewsReducers,
CommunityReducers


})

export default rootReducer