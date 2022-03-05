import { useQuery } from "@apollo/client";
import React from "react";
import gql from "graphql-tag";
import { Grid, Image } from "semantic-ui-react";

import PostCard from "../components/PostCard";

export default function Home() {
    const {
        loading,
        data: { getPosts: posts }
    } = useQuery(FETCH_POSTS_QUERY);
    if (posts) {
        console.log(posts);
    }
    return (
        <Grid columns={3} divided>
            <Grid.Row className="page-title">
                <h1>Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
                {loading ? (
                    <h1>Loading Posts..</h1>
                ) : (
                    posts &&
                    posts.map((post) => (
                        <Grid.Column key={post.id}>
                            <Image src="/images/wireframe/media-paragraph.png" />
                            <PostCard post={post}/>
                        </Grid.Column>
                    ))
                )}
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

const FETCH_POSTS_QUERY = gql`
    {
        getPosts {
            id
            body
            createdAt
            username
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id
                username
                createdAt
                body
            }
        }
    }
`;
