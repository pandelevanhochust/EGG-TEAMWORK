
import React, { useState } from 'react';
import { Breadcrumb, Button, Card, Container, Form, ListGroup, ListGroupItem } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../Header';

const posts = [
  { id: 1, title: "Nội quy của diễn đàn & chi tiết từng mục", author: "fRzzy", date: "Mar 12, 2020", content: "This is the content of the post." },
  { id: 2, title: "Không thảo luận được tại F17/F33?", author: "Kacee", date: "May 16, 2021", content: "Content for this post goes here." },
  { id: 3, title: "Công bố thẻ đồng thương hiệu Timo × VOZ và các ưu đãi liên quan", author: "fRzzy", date: "Jan 21, 2022", content: "Here is some other content for the third post." },
];

const comments = [
  { username:"pandelevan", date:"22/10/24",comment : "hellooo how low "},
  { username:"quybeo", date:"01/04/24",comment : "yoo"},
  { username:"eminem", date:"01/3/24",comment : "make me king"},
  { username:"chubedan", date:"31/10/22",comment : "spagetii "},
  { username:"taylor swift", date:"02/10/24",comment : "ceb"},
];

const PostScreen = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  const [user_comment,setUser_comment] = useState("");

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
    <Header/>
    <Container className="thread my-5">
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item href="/">Forums</Breadcrumb.Item>
        <Breadcrumb.Item active>{post.title}</Breadcrumb.Item>
      </Breadcrumb>

      <Card className="p-4 shadow-sm thread m-auto">
        <Card.Body>
          <h1>{post.title}</h1>
          <p className="text-muted">
            by {post.author} • {post.date}
          </p>
          <hr />
          <p>{post.content}</p>
          <Button className="rounded-button p-3" href="/" variant="secondary">
            Back
          </Button>
        </Card.Body>
      </Card>

      <Card className="p-4 shadow-sm thread my-3 m-auto">
        <h2>Comments</h2>
      <ListGroup variant='flush' className="comment-section mt-2">
        {comments.map((comment,index) => (
          <Card className="comment my-2">
          <ListGroupItem key={index}>
            <p>{comment.username} {comment  .date}</p>
            {comment.comment}
          </ListGroupItem>
          </Card>
        ))}
        <Card className="comment my-2">
          <ListGroupItem>
          <Form.Group className="my-3" controlId="comment">
              <Form.Label>Your Comment</Form.Label>
              <Form.Control
                type="text"
                placeholder="Leave your comment here"
                value={user_comment}
                required
                className="py-4 mt-2"
                onChange={(e) => setUser_comment(e.target.value)}
                />
            </Form.Group>
          </ListGroupItem>
          </Card>
      </ListGroup>      
    </Card>

    </Container>
    </>
  );
};

export default PostScreen;
