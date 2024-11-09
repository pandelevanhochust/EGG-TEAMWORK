
import React from 'react';
import { Breadcrumb, Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from './Header';

const posts = [
  { id: 1, title: "Nội quy của diễn đàn & chi tiết từng mục", author: "fRzzy", date: "Mar 12, 2020", content: "This is the content of the post." },
  { id: 2, title: "Không thảo luận được tại F17/F33?", author: "Kacee", date: "May 16, 2021", content: "Content for this post goes here." },
  { id: 3, title: "Công bố thẻ đồng thương hiệu Timo × VOZ và các ưu đãi liên quan", author: "fRzzy", date: "Jan 21, 2022", content: "Here is some other content for the third post." },
];

const PostScreen = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

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

      <Card className="p-4 shadow-sm thread">
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
    </Container>
    </>
  );
};

export default PostScreen;
