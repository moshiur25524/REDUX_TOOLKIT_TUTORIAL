import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './PostSlice';

const PostView = () => {
    const dispatch = useDispatch()
    const {error, isLoading, posts} = useSelector(state => state.posts)

    useEffect(()=>{
        dispatch(fetchPosts())
    },[])
    return (
        <div>
            <h1>All The Fetched Post using Redux toolkit</h1>
            {
                isLoading && <h3>Loading...</h3>
            }
            {
                error && <h3>{error.message}</h3>
            }
            <section>
            {
                posts && posts.map(post => <article key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>)
            }
            </section>
        </div>
    );
};

export default PostView;