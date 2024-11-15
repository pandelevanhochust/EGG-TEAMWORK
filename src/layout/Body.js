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

  // Combine all threads and sort them by date to get the 3 most recent ones
  const allThreads = [...threads, ...dp, ...graph];
  const sortedThreads = allThreads.sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestThreads = sortedThreads.slice(0, 3); // Get the 3 most recent threads

  return (
    <Container className="body my-5">
      <Breadcrumb className="custom-breadcrumb">
        <Breadcrumb.Item active>Forums</Breadcrumb.Item>
        <Breadcrumb.Item href="/topic">Topic</Breadcrumb.Item>
      </Breadcrumb>

      {/* Row to display both the recent threads card and other sections side by side */}
      <Row className="mb-5">
        {/* Column for the "Most Recent Threads" card */}
        <Col md={8}>
          <Section title="Thông báo" data={threads} />
          <Section title="Dynamic Programming" data={dp} />
          <Section title="Graph" data={graph} />
        </Col>

        {/* Latest Threads Section */}
        <Col md={4}>
          <section>
            <Card className="shadow-sm mb-4">
              <Card.Header className="shadow-sm" style={{ backgroundColor: '#EBD3F8' }}>
                <h4 className="ms-3 fs-4 mt-3">Latest</h4> {/* Reduced font size */}
                <Row className="pb-2 mb-1 text-muted ms-1">
                  <Col>Topic</Col>
                </Row>
              </Card.Header>
              <Card.Body>
                {latestThreads.map((thread) => (
                  <Row key={thread.id} className="align-items-center py-3 border-bottom">
                    <Col md={12}>
                      <Link to={`/thread/${thread.id}`} className="fs-6 text-decoration-none text-dark topic-title" style={{ fontWeight: '500' }}>
                        📌 {thread.title}
                      </Link>
                      <div className=" text-muted small mt-1 ms-auto" style={{ fontWeight: '500' }}>
                        by {thread.author} • {thread.date} • Last by {thread.lastReplyUser}
                      </div>
                    </Col>
                  </Row>
                ))}
              </Card.Body>
            </Card>
          </section>
        </Col>
      </Row>
    </Container>
  );
};

const Section = ({ title, data }) => {
  return (
    <section className="mb-5">
      <Card>
        <Card.Header className="shadow-sm" style={{ backgroundColor: '#EBD3F8' }}>
          <h4 className="ms-2 fs-4 mt-3">{title}</h4> {/* Reduced font size */}
        </Card.Header>
        <Card.Body>
          {data.map((thread) => (
            <Row key={thread.id} className="align-items-center py-3 border-bottom">
              <Col md={6}>
                <Link to={`/thread/${thread.id}`} className="text-decoration-none text-dark topic-title fs-6" style={{ fontWeight: 500 }}>
                  📌 {thread.title}
                </Link>
                <div className="text-muted small ms-4" style={{ fontWeight: 500 }}>by {thread.author}</div>
              </Col>
              <Col md={2} className="text-center" style={{ fontWeight: 500 }}>{thread.replies}</Col>
              <Col md={2} className="text-center" style={{ fontWeight: 500 }}>{thread.views}</Col>
              <Col md={2} className="text-center text-muted" style={{ fontWeight: 500 }}>{thread.lastReplyDate}</Col>
            </Row>
          ))}
        </Card.Body>
      </Card>
    </section>
  );
};

export default Body;
