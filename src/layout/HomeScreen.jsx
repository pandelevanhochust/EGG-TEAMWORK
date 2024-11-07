import React from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = () => {
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
    <div className="body">
      <>
      <h2>Thông báo</h2>
      <div className="home_noti">
        {threads.map((thread) => (
          <div key={thread.id} className="thread-item">
            <div className="thread-info">
              <Link to={`/thread/${thread.id}`} className="thread-title">{thread.title}</Link>
              <div className="thread-meta">
                <span className="author">{thread.author}</span>
                <span className="date">{thread.date}</span>
              </div>
            </div>
            <div className="thread-stats">
              <span className="replies">Replies: {thread.replies}</span>
              <span className="views">Views: {thread.views}</span>
            </div>
            <div className="last-reply">
              <span className="last-reply-date">{thread.lastReplyDate}</span>
              <span className="last-reply-user">{thread.lastReplyUser}</span>
            </div>
          </div>
        ))}
      </div>
      </>

      <>
      <h2> Dynamic Programming </h2>
      <div className = "dynamic_programming">
      {dp.map((thread) => (
          <div key={thread.id} className="thread-item">
            <div className="thread-info">
              <Link to={`/thread/${thread.id}`} className="thread-title">{thread.title}</Link>
              <div className="thread-meta">
                <span className="author">{thread.author}</span>
                <span className="date">{thread.date}</span>
              </div>
            </div>
            <div className="thread-stats">
              <span className="replies">Replies: {thread.replies}</span>
              <span className="views">Views: {thread.views}</span>
            </div>
            <div className="last-reply">
              <span className="last-reply-date">{thread.lastReplyDate}</span>
              <span className="last-reply-user">{thread.lastReplyUser}</span>
            </div>
          </div>
        ))}
      </div>
      </>


      <>
      <h2> Graph </h2>
      <div className = "graph">
      {graph.map((thread) => (
          <div key={thread.id} className="thread-item">
            <div className="thread-info">
              <Link to={`/thread/${thread.id}`} className="thread-title">{thread.title}</Link>
              <div className="thread-meta">
                <span className="author">{thread.author}</span>
                <span className="date">{thread.date}</span>
              </div>
            </div>
            <div className="thread-stats">
              <span className="replies">Replies: {thread.replies}</span>
              <span className="views">Views: {thread.views}</span>
            </div>
            <div className="last-reply">
              <span className="last-reply-date">{thread.lastReplyDate}</span>
              <span className="last-reply-user">{thread.lastReplyUser}</span>
            </div>
          </div>
        ))}
      </div>
      </>


    </div>
  );
};

export default HomeScreen;
