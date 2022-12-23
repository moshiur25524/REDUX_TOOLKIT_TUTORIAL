import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return res.data
})

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        isLoading: false,
        posts: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = null;
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.posts = [];
            state.error = action.error.message;
        })
    }
})

export default postSlice.reducer;

// We laern from the react-toolkit to fetch data using axios

/*
# PostsSlice file:

1. get createSlice from redux toolkit and inside it, we use name, initialState as usual but also used extraReducers(it is used when we want to get async data).
2. then uesed createdAsyncThunk(it is also used for async operation). Inside it we named the operation which is posts/fetchPosts and besides we make a async anonemous function to fetch data using axios. then return res.data . And createAsynckThunk's variable name is fetchPosts
3. then we make  a function what take a parameter named builder for extraReducers as property. We use those like this:
        builder.AddCase(fetchPosts.pending , (state) =>{
            isLaoding: true;
        })
        [We then use (fetchPosts.fullfil) and (fetchPosts.rejected)]
4. lastly export the fetchPosts and export default fetchposts.reducer

# Store file

5. set PostReducer as a property of posts

# PostsView file:

6. we created the postView page to show posts
7. distractured the loading, posts and error from the state.posts and get dispatch with useDispacth()
8. inside the useEffect we dispatch and call the fetchposts function
9. then we show loading and error if occured. and is posts is retrieved, we map the posts to show the posts data
10. (Optional) style the posts page with media query and grid to responsive the application


*/