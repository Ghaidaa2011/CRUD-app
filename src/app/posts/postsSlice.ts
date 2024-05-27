import { createSlice } from "@reduxjs/toolkit";
import { TPost } from "../../types/post";
import { TLoading } from "../../types/shared";
import actGetPost from "./act/actGetPosts";
import actDeletePost from "./act/actDeletePost";
import actInsertPost from "./act/actInsertPost";
import actGetPostInfo from "./act/actGetPostInfo";
import actEditPost from "./act/actEditPost";
import { isString } from "../../types/guards";
interface IPostState {
  posts: TPost[];
  loading: TLoading;
  error: string | null;
  postInfo: TPost | null;
}
const initialState: IPostState = {
  posts: [],
  loading: "idle",
  error: null,
  postInfo: null,
};
const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers:{
    cleanPostInfo: (state)=>{state.postInfo = null}
  },
  extraReducers:(builder) => {
    //get posts
    builder.addCase(actGetPost.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actGetPost.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.posts= action.payload;
    });
    builder.addCase(actGetPost.rejected,(state,action)=>{
      state.loading= "failed";
      if(isString(action.payload)){
        state.error = action.payload
      }
    });
    //delete a post
    builder.addCase(actDeletePost.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actDeletePost.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.posts = state.posts.filter((el)=> el.id != action.payload);
    });
    builder.addCase(actDeletePost.rejected,(state,action)=>{
      state.loading= "failed";
      if(isString(action.payload)){
        state.error = action.payload
      }
    });
    //insert a post
    builder.addCase(actInsertPost.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actInsertPost.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.posts.push(action.payload);
    });
    builder.addCase(actInsertPost.rejected,(state,action)=>{
      state.loading= "failed";
      if(isString(action.payload)){
        state.error = action.payload
      }
    });
    //Get PostInfo
    builder.addCase(actGetPostInfo.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actGetPostInfo.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.postInfo = action.payload;
    });
    builder.addCase(actGetPostInfo.rejected,(state,action)=>{
      state.loading= "failed";
      if(isString(action.payload)){
        state.error = action.payload
      }
    });
    //edit a post
    builder.addCase(actEditPost.pending,(state)=>{
      state.loading= "pending";
      state.error = null;
    });
    builder.addCase(actEditPost.fulfilled,(state, action)=>{
      state.loading= "succeeded";
      state.postInfo = action.payload;
    });
    builder.addCase(actEditPost.rejected,(state,action)=>{
      state.loading= "failed";
      if(isString(action.payload)){
        state.error = action.payload
      }
    });
  },
});
export const {cleanPostInfo} = postSlice.actions;
export {actGetPost, actDeletePost, actInsertPost, actGetPostInfo, actEditPost};
export default postSlice.reducer;