import React from 'react';
import { Breadcrumb, Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../Header';
import './TopicScreen.css';

const TopicScreen = () => {
  const topics = [
    { id: 1, title: 'Nội quy của diễn đàn & chi tiết từng mục', replies: 6, views: '70K', lastReply: 'May 27, 2022', author: 'Admin' },
    { id: 2, title: 'Không thảo luận được tại F17/F33?', replies: 0, views: '72K', lastReply: 'May 16, 2021', author: 'User123' },
    { id: 3, title: 'Công bố thẻ đồng thương hiệu Timo x VOZ và các ưu đãi liên quan', replies: 1, views: '105K', lastReply: 'May 6, 2024', author: 'Moderator' },
    { id: 4, title: 'Cập nhật về nâng cấp mới nhất của VOZ', replies: 4, views: '32K', lastReply: 'Oct 17, 2023', author: 'Admin' },
    { id: 5, title: 'Điều kiện để trở thành Senior Member', replies: 1, views: '108K', lastReply: 'Jul 16, 2023', author: 'User456' },
    { id: 6, title: 'Phát các cho thành viên đăng bài có tâm', replies: 0, views: '46K', lastReply: 'Jun 8, 2022', author: 'User789' },
    { id: 7, title: 'Trải nghiệm Kingston FURY và nhận quà cho review hay nhất', replies: 2, views: '16K', lastReply: 'May 10, 2022', author: 'User123' },
    { id: 8, title: 'Tạm cấm tất cả các thread có nội dung “bóc phốt” hay tương tự', replies: 0, views: '21K', lastReply: 'Dec 27, 2021', author: 'Admin' }
  ];

  const importantTopics = topics.filter(topic => topic.replies >= 4);
  const lessImportantTopics = topics.filter(topic => topic.replies < 4);

  return (
    <>
      <Header />
      <Container className="body my-5">
        <Breadcrumb className="custom-breadcrumb">
          <Breadcrumb.Item href="/">Forums</Breadcrumb.Item>
          <Breadcrumb.Item active>Topic</Breadcrumb.Item>
        </Breadcrumb>

        <h2 className="mb-4 text-black">All Topics</h2>
        <Row>
          {/* Large column for important topics */}
          <Col md={8}>
            <Card className="shadow-sm mb-4">
              <Card.Body>
                <h4>Important Topics</h4>
                <Row className="border-bottom pb-2 mb-3 text-muted">
                  <Col md={6}>Topic</Col>
                  <Col md={2} className="text-center">Replies</Col>
                  <Col md={2} className="text-center">Views</Col>
                  <Col md={2} className="text-center">Last Reply</Col>
                </Row>

                {importantTopics.map(topic => (
                  <Row key={topic.id} className="align-items-center py-3 border-bottom">
                    <Col md={6}>
                      <Link to={`/topic/${topic.id}`} className="text-decoration-none text-dark">
                        📌 {topic.title}
                      </Link>
                      <div className="text-muted small">Posted by {topic.author}</div>
                    </Col>
                    <Col md={2} className="text-center">{topic.replies}</Col>
                    <Col md={2} className="text-center">{topic.views}</Col>
                    <Col md={2} className="text-center text-muted">{topic.lastReply}</Col>
                  </Row>
                ))}
              </Card.Body>
            </Card>
          </Col>

          {/* Small column for less important topics */}
          <Col md={4}>
            <Card className="shadow-sm mb-4 less-important-topic">
              <Card.Body>
                <h4>Less Important Topics</h4>
                <Row className="border-bottom pb-2 mb-3 text-muted">
                  <Col md={4}>Topic</Col>
                  <Col md={3} className="text-center small">Replies</Col>
                  <Col md={2} className="text-center small">Views</Col>
                  <Col md={3} className="text-center small">Last Reply</Col>
                </Row>

                {lessImportantTopics.map(topic => (
                  <Row key={topic.id} className="align-items-center py-3 border-bottom">
                    <Col md={5}>
                      <Link to={`/topic/${topic.id}`} className="text-decoration-none text-dark text-center small">
                        📌 {topic.title}
                      </Link>
                      <div className="text-muted small">Posted by {topic.author}</div>
                    </Col>
                    <Col md={2} className="text-center small">{topic.replies}</Col>
                    <Col md={2} className="text-center small">{topic.views}</Col>
                    <Col md={3} className="text-center text-muted small">{topic.lastReply}</Col>
                  </Row>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="mt-4 text-center">
          <Button variant="primary">Create New Topic</Button>
        </div>
      </Container>
    </>
  );
};

export default TopicScreen;