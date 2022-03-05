import React from "react";
import { Card, Icon, Label, Button, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

export default function PostCard({
    post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {

    function likePost(){
        console.log(likeCount+1)
    }
    function commentOnPost(){
        console.log('Comment')
    }
    return (
        <div>
            <Card fluid>
                <Card.Content>
                    <Image
                        floated="right"
                        size="mini"
                        src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                    />
                    <Card.Header>{username}</Card.Header>
                    <Card.Meta as={Link} to={`/posts/${id}`}>
                        {moment(createdAt).fromNow()}
                    </Card.Meta>
                    <Card.Description>{body}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <Button onClick={likePost} as="div" labelPosition="right">
                        <Button color="teal" basic>
                            <Icon name="heart" />
                        </Button>
                        <Label as="a" basic color="teal" pointing="left">
                            {likeCount}
                        </Label>
                    </Button>
                    <Button onClick={commentOnPost} as="div" labelPosition="right">
                        <Button color="blue" basic>
                            <Icon name="comment" />
                        </Button>
                        <Label as="a" basic color="blue" pointing="left">
                            {commentCount}
                        </Label>
                    </Button>
                </Card.Content>
            </Card>
        </div>
    );
}
