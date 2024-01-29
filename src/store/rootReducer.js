// import counterReducer from "../components/features/counter/counterSlice";
// import PostsReducer from "../components/features/posts/postSlice";
// import userSlice from "../components/features/users/userSlice";
import categorySlice from "../components/features/users/categorySlice";

export const rootReducer = combineReducers({
        // counter:counterReducer,
        // posts:PostsReducer,
        // users:userSlice,
        categories:categorySlice
})