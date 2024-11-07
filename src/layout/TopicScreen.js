import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './TopicScreen.css';

const TopicScreen = () => {
  const location = useLocation();
  const breadcrumb = location.pathname === '/topic' ? 'Latests' : 'Forums';

  const topics = [
    { id: 1, title: 'Nội quy của diễn đàn & chi tiết từng mục', replies: 6, views: '70K', lastReply: 'May 27, 2022' },
    { id: 2, title: 'Không thảo luận được tại F17/F33?', replies: 0, views: '72K', lastReply: 'May 16, 2021' },
    { id: 3, title: 'Công bố thẻ đồng thương hiệu Timo x VOZ và các ưu đãi liên quan', replies: 1, views: '105K', lastReply: 'May 6, 2024' },
    { id: 4, title: 'Cập nhật về nâng cấp mới nhất của VOZ', replies: 4, views: '32K', lastReply: 'Oct 17, 2023' },
    { id: 5, title: 'Điều kiện để trở thành Senior Member', replies: 1, views: '108K', lastReply: 'Jul 16, 2023' },
    { id: 6, title: 'Phát các cho thành viên đăng bài có tâm', replies: 0, views: '46K', lastReply: 'Jun 8, 2022' },
    { id: 7, title: 'Trải nghiệm Kingston FURY và nhận quà cho review hay nhất', replies: 2, views: '16K', lastReply: 'May 10, 2022' },
    { id: 8, title: 'Tạm cấm tất cả các thread có nội dung “bóc phốt” hay tương tự', replies: 0, views: '21K', lastReply: 'Dec 27, 2021' }
  ];

  return (
    <div className="forum-container">
      <div className="breadcrumbs">
        <Link to="/">Forums</Link> &gt; <Link to={location.pathname}>{breadcrumb}</Link>
      </div>
      <h2>All Topics</h2>
      <div className="table">
        <div className="table-header">
          <div className="column-title">Topic</div>
          <div className="column-replies">Replies</div>
          <div className="column-views">Views</div>
          <div className="column-last-reply">Last Reply</div>
        </div>
        {topics.map(topic => (
          <div className="table-row" key={topic.id}>
            <div className="column-title">
              <span className="icon">📌</span> <a href="#">{topic.title}</a>
            </div>
            <div className="column-replies">{topic.replies}</div>
            <div className="column-views">{topic.views}</div>
            <div className="column-last-reply">{topic.lastReply}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopicScreen;