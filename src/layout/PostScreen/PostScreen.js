import React, { useState } from 'react';
import { Breadcrumb, Card, Col, Container, Form, ListGroup, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Header from '../Header';

const posts = [
  { id: 1, title: "Nội quy của diễn đàn & chi tiết từng mục", author: "fRzzy", date: "Mar 12, 2020", views: 70000, content: "This is the content of the post." },
  { id: 2, title: "Không thảo luận được tại F17/F33?", author: "Kacee", date: "May 16, 2021", views: 72000, content: "Content for this post goes here." },
  { 
    id: 3, 
    title: "Công bố thẻ đồng thương hiệu Timo × VOZ và các ưu đãi liên quan", 
    author: "fRzzy", 
    date: "Jan 21, 2022", 
    views: 105000, 
    content: (
      <div>
        <h2>Công Bố Thẻ Đồng Thương Hiệu Timo × VOZ và Các Ưu Đãi Liên Quan</h2>
        <p>Chúng tôi vui mừng thông báo về sự ra mắt của thẻ đồng thương hiệu Timo × VOZ, một bước tiến quan trọng trong việc mang đến cho cộng đồng VOZ một trải nghiệm tài chính tiện ích, dễ dàng và đầy ưu đãi.</p>
        <h3>Giới Thiệu Thẻ Đồng Thương Hiệu Timo × VOZ</h3>
        <p>Thẻ đồng thương hiệu Timo × VOZ là sự kết hợp hoàn hảo giữa ngân hàng số Timo và diễn đàn công nghệ VOZ. Với mục tiêu nâng cao trải nghiệm cho người dùng, thẻ này không chỉ giúp bạn quản lý tài chính dễ dàng mà còn mang đến các ưu đãi đặc biệt khi mua sắm online, thanh toán và tham gia các sự kiện do VOZ tổ chức.</p>
        <h4>Tính Năng Nổi Bật Của Thẻ Timo × VOZ:</h4>
        <ul>
          <li><strong>Thanh toán tiện lợi:</strong> Hỗ trợ thanh toán qua mạng và tại các điểm bán hàng trên toàn quốc.</li>
          <li><strong>Quản lý tài chính dễ dàng:</strong> Bạn có thể theo dõi chi tiêu, chuyển khoản và rút tiền trực tuyến ngay trên ứng dụng Timo.</li>
          <li><strong>Ưu đãi đặc biệt:</strong> Thẻ Timo × VOZ mang đến nhiều ưu đãi giảm giá cho các sản phẩm công nghệ, đồ điện tử, và các dịch vụ cho cộng đồng VOZ.</li>
        </ul>
        <h4>Ưu Đãi Đặc Biệt Khi Sử Dụng Thẻ Timo × VOZ</h4>
        <ul>
          <li><strong>Hoàn tiền lên đến 5%</strong> cho mọi giao dịch trực tuyến qua thẻ đồng thương hiệu Timo × VOZ.</li>
          <li><strong>Giảm giá đến 20%</strong> khi mua các sản phẩm tại các đối tác liên kết với VOZ.</li>
          <li><strong>Quà tặng hấp dẫn:</strong> Nhận các voucher giảm giá và quà tặng độc quyền từ các thương hiệu nổi tiếng.</li>
        </ul>
        <h4>Cách Đăng Ký Thẻ Timo × VOZ</h4>
        <p>Để sở hữu thẻ Timo × VOZ, bạn chỉ cần:</p>
        <ol>
          <li>Truy cập vào website hoặc ứng dụng Timo: Đăng ký tài khoản Timo nếu bạn chưa có.</li>
          <li>Chọn thẻ Timo × VOZ: Điền thông tin cần thiết và hoàn tất thủ tục đăng ký.</li>
          <li>Nhận thẻ tại nhà: Sau khi đăng ký, bạn sẽ nhận thẻ đồng thương hiệu Timo × VOZ ngay tại địa chỉ của mình.</li>
        </ol>
        <h4>Tại Sao Nên Chọn Thẻ Timo × VOZ?</h4>
        <ul>
          <li><strong>Tiện lợi:</strong> Bạn có thể sử dụng thẻ mọi lúc, mọi nơi để thanh toán và rút tiền.</li>
          <li><strong>Ưu đãi dành riêng cho cộng đồng VOZ:</strong> Các thành viên VOZ sẽ được hưởng những ưu đãi đặc biệt chỉ có tại thẻ đồng thương hiệu này.</li>
          <li><strong>An toàn và bảo mật:</strong> Timo sử dụng công nghệ bảo mật tiên tiến giúp bảo vệ tài khoản của bạn khỏi các mối đe dọa.</li>
        </ul>
        <h4>Kết Luận</h4>
        <p>Thẻ đồng thương hiệu Timo × VOZ không chỉ là công cụ thanh toán thông minh mà còn là chiếc chìa khóa mở ra nhiều cơ hội ưu đãi cho cộng đồng VOZ. Hãy đăng ký ngay hôm nay để không bỏ lỡ những lợi ích tuyệt vời mà thẻ này mang lại!</p>
        <p>Nếu bạn có bất kỳ câu hỏi nào hoặc cần hỗ trợ về việc đăng ký thẻ, đừng ngần ngại liên hệ với chúng tôi qua [Đường dây nóng] hoặc [Email hỗ trợ].</p>
      </div>
    )
  }
];

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
          <Col md={9}>
            <Card className="p-3 shadow-sm thread m-auto mb-4 post">
              <Card.Body>
                <h1 className="text-right fs-1">{post.title}</h1> {/* Căn giữa tiêu đề và giảm kích thước */}
                <p className="text-muted text-right small mb-4" >by {post.author} • {post.date}</p> {/* Giảm kích thước chữ thông tin tác giả */}
                <hr />
                <p className="medium fs-5 mt-4">{post.content}</p> {/* Giảm kích thước chữ nội dung bài viết */}
              </Card.Body>
            </Card>
          </Col>


          <Col md={3}>
          <Card className="shadow-sm mb-2 text-align-center">
            <Card.Header style={{ backgroundColor: '#EBD3F8' }}>
              <h2 className="fs-3 py-2 ms-2">Comments</h2>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush" className="comment-section mt-2">
                {comments.map((comment, index) => (
                  <Row
                    key={index}
                    className="align-items-center py-1 border-bottom"
                    style={{ fontWeight: "normal" }}
                  >
                    <Col>
                      <p>
                        <strong>{comment.username}</strong>{" "}
                        <span className="text-muted small m-1">{comment.date}</span>
                      </p>
                      <p className="small">{comment.comment}</p>
                    </Col>
                  </Row>
                ))}
                <Row className="align-items-center py-3">
                  <Col>
                    <Form.Group className="my-3" controlId="comment">
                      <Form.Label>Your Comment</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Leave your comment here"
                        value={user_comment}
                        required
                        className="py-3 mt-2"
                        onChange={(e) => setUser_comment(e.target.value)}
                      />
                      <div className="mt-4 text-center" style={{ color: '#EBD3F8' }}>
                        <Button>Push</Button>
                      </div>
                    </Form.Group>
                  </Col>
                </Row>
              </ListGroup>
            </Card.Body>
          </Card>
          </Col>
        </Row>

      </Container>
    </>
  );
};

export default PostScreen;
