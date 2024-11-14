import React, { useState } from 'react';
import { Breadcrumb, Card, Container, Form, ListGroup, ListGroupItem, Row, Col, Badge } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../Header';

const posts = [
  { id: 1, title: "Nội quy của diễn đàn & chi tiết từng mục", author: "fRzzy", date: "Mar 12, 2020", views: 70000, content: "This is the content of the post." },
  { id: 2, title: "Không thảo luận được tại F17/F33?", author: "Kacee", date: "May 16, 2021", views: 72000, content: "Content for this post goes here." },
  { id: 3, title: "Công bố thẻ đồng thương hiệu Timo × VOZ và các ưu đãi liên quan", author: "fRzzy", date: "Jan 21, 2022", views: 105000, content: "Here is some other content for the third post." },
];

// Xác định bài viết nổi bật dựa trên lượt xem cao nhất
const featuredPost = posts.reduce((prev, current) => (current.views > prev.views ? current : prev), posts[0]);
const otherPosts = posts.filter((post) => post.id !== featuredPost.id);

const comments = [
  { username: "pandelevan", date: "22/10/24", comment: "hellooo how low" },
  { username: "quybeo", date: "01/04/24", comment: "yoo" },
  { username: "eminem", date: "01/3/24", comment: "make me king" },
  { username: "chubedan", date: "31/10/22", comment: "spagetii" },
  { username: "taylor swift", date: "02/10/24", comment: "ceb" },
];

const PostScreen = () => {
  const { id } = useParams();
  const post = posts.find((post) => post.id === parseInt(id));

  const [user_comment, setUser_comment] = useState("");

  if (!post) {
    return <p>Post not found</p>;
  }

  return (
    <>
      <Header />
      <Container className="thread my-5">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item href="/">Forums</Breadcrumb.Item>
          <Breadcrumb.Item active>{post.title}</Breadcrumb.Item>
        </Breadcrumb>

        <Row>
          {/* Cột trái lớn hơn cho bài viết nổi bật */}
          <Col md={8}>
            <Card className="p-4 shadow-sm thread m-auto mb-4">
              <Card.Body>
                {/* Thêm Badge "Announcement" */}
                <Badge bg="warning" className="mb-2">Announcement</Badge>
                <h1 className="text-center fs-4">{featuredPost.title}</h1> {/* Căn giữa tiêu đề và giảm kích thước */}
                <p className="text-muted text-center small">by {featuredPost.author} • {featuredPost.date}</p> {/* Giảm kích thước chữ thông tin tác giả */}
                <hr />
                <p className="small">{featuredPost.content}</p> {/* Giảm kích thước chữ nội dung bài viết */}
              </Card.Body>
            </Card>
          </Col>

          {/* Cột phải nhỏ hơn cho các bài viết còn lại */}
          <Col md={4}>
            {otherPosts.map((otherPost) => (
              <Card key={otherPost.id} className="p-3 shadow-sm thread mb-4">
                <Card.Body>
                  <h4 className="text-center fs-5">{otherPost.title}</h4> {/* Giảm kích thước tiêu đề bài viết */}
                  <p className="text-muted text-center small">by {otherPost.author} • {otherPost.date}</p> {/* Giảm kích thước chữ thông tin tác giả */}
                  <p className="small">{otherPost.content}</p> {/* Giảm kích thước chữ nội dung bài viết */}
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        <Card className="p-4 shadow-sm thread my-3 m-auto">
          <h2 className="fs-4">Comments</h2> {/* Giảm kích thước tiêu đề phần bình luận */}
          <ListGroup variant='flush' className="comment-section mt-2">
            {comments.map((comment, index) => (
              <Card className="comment my-2" key={index}>
                <ListGroupItem>
                  <p><strong>{comment.username}</strong> <span className="text-muted small">{comment.date}</span></p> {/* Giảm kích thước chữ ngày tháng */}
                  <p className="small">{comment.comment}</p> {/* Giảm kích thước chữ bình luận */}
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
