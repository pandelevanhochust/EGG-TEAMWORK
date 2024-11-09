import React from 'react';
import { Breadcrumb, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import './Body.css';

const Body = () => {
 const threads = [
    { id: 1, title: "Nội quy của diễn đàn & chi tiết từng mục", author: "fRzzy", date: "Mar 12, 2020", replies: 6, views: "70K", lastReplyDate: "May 27, 2022", lastReplyUser: "thuyvan" },
    { id: 2, title: "Không thảo luận được tại F17/F33?", author: "Kacee", date: "May 16, 2021", replies: 0, views: "72K", lastReplyDate: "May 16, 2021", lastReplyUser: "Kacee" },
    { id: 3, title: "Công bố thẻ đồng thương hiệu Timo × VOZ và các ưu đãi liên quan", author: "fRzzy", date: "Jan 21, 2022", replies: 1, views: "105K", lastReplyDate: "May 6, 2024", lastReplyUser: "vtalinh" },
  ];

  const dp = [
    { id: 1, title: "1", author: "fRzzy", date: "Mar 12, 2020", replies: 6, views: "70K", lastReplyDate: "May 27, 2022", lastReplyUser: "thuyvan" },
    { id: 2, title: "2", author: "Kacee", date: "May 16, 2021", replies: 0, views: "72K", lastReplyDate: "May 16, 2021", lastReplyUser: "Kacee" },
    { id: 3, title: "3", author: "fRzzy", date: "Jan 21, 2022", replies: 1, views: "105K", lastReplyDate: "May 6, 2024", lastReplyUser: "vtalinh" },
  ];

  const graph = [
    { id: 1, title: "andsajsnj", author: "fRzzy", date: "Mar 12, 2020", replies: 6, views: "70K", lastReplyDate: "May 27, 2022", lastReplyUser: "thuyvan" },
    { id: 2, title: "dnsjk a", author: "Kacee", date: "May 16, 2021", replies: 0, views: "72K", lastReplyDate: "May 16, 2021", lastReplyUser: "Kacee" },
    { id: 3, title: "ndakj", author: "fRzzy", date: "Jan 21, 2022", replies: 1, views: "105K", lastReplyDate: "May 6, 2024", lastReplyUser: "vtalinh" },
  ];

  return (
    <Container className="body my-5">
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item active>Forums</Breadcrumb.Item>
        <Breadcrumb.Item href="/topic">Topic</Breadcrumb.Item>
      </Breadcrumb>

      <Section title="Thông báo" data={threads} />
      <Section title="Dynamic Programming" data={dp} />
      <Section title="Graph" data={graph} />
    </Container>
  );
};

// Reusable Section component
const Section = ({ title, data }) => (
  <section className="mb-5">
    <h2>{title}</h2>
    <Card className="shadowlv">
      <Card.Body>
        {data.map((thread) => (
          <Row key={thread.id} className="thread-item py-3 border-bottom">
            <Col md={6}>
              <Link to={`/thread/${thread.id}`} className="thread-title text-decoration-none text-danger">
                {thread.title}
              </Link>
              <div className="text-muted">
                <small>by {thread.author} • {thread.date}</small>
              </div>
            </Col>
            <Col md={3} className="text-md-right">
              <span className="replies d-block">Replies: {thread.replies}</span>
              <span className="views">Views: {thread.views}</span>
            </Col>
            <Col md={3} className="text-md-right">
              <span className="last-reply-date font-weight-bold">{thread.lastReplyDate}</span>
              <div className="text-muted">
                <small>Last by {thread.lastReplyUser}</small>
              </div>
            </Col>
          </Row>
        ))}
      </Card.Body>
    </Card>
  </section>
);

export default Body;
