import { useQuery } from "@apollo/client";
import React, { useContext } from "react";
import { Grid, Image } from "semantic-ui-react";

import { AuthContext } from "../context/auth";
import PostCard from "../components/PostCard";
import PostForm from "../components/PostForm.js";
import {FETCH_POSTS_QUERY} from '../util/graphql'

export default function Home() {
    const { user } = useContext(AuthContext);
    const { data, loading, error } = useQuery(FETCH_POSTS_QUERY);
    if (data) {
        const { getPosts: posts } = data;
    }
    if (error) {
        console.log(error);
        return "error"; // blocks rendering
    }
    return (
        <Grid columns={3} divided>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                
                {user && (
                <Grid.Column>
                    <PostForm></PostForm>
                </Grid.Column>
                )}
                {loading && <h1>Loading posts..</h1>}
                {data &&
                    data.getPosts &&
                    data.getPosts.map((post) => (
                        <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                            <PostCard post={post} />
                        </Grid.Column>
                    ))}
                {/* {loading ? (
                    <h1>Loading Posts..</h1>
                ) : (
                    posts &&
                    posts.map((post) => (
                        <Grid.Column key={post.id}>
                            <Image src="/images/wireframe/media-paragraph.png" />
                            <PostCard post={post} />
                        </Grid.Column>
                    ))
                )} */}
            </Grid.Row>
        </Grid>
    );

    // const {
    //   loading,
    //   posts
    //   } = useQuery(FETCH_POSTS_QUERY);
    //   if (posts) {
    //       console.log(posts);
    //   }
    // return (<div> hello </div>)
}

