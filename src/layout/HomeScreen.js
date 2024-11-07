import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Body.css';

const HomeScreen = () => {
  return (
    <div className='body'>
      <div className="hall">
        <div className="home"><Link to="/topic">Hall Of Legend</Link></div>
        <div>
          <div className="item-list">
            <div className="list">
              <Link to="/topic">Notifications</Link>
              <div className="note-stats">
                <dl className="note-text">
                  <dt>Thread</dt>
                  <dd>Count</dd>
                </dl>
                <dl className="note-text">
                  <dt>Messages</dt>
                  <dd>Count</dd>
                </dl>
              </div>
              <div className="note-extra">
                <div className="node-extra icon"></div>
                <div className="node-text">Content</div>
                <div className="note-text">Date</div>
              </div>
            </div>
            <div className="list">
              <Link to="/topic">News</Link>
              <div className="note-stats">
                <dl className="note-text">
                  <dt>Thread</dt>
                  <dd>Count</dd>
                </dl>
                <dl className="note-text">
                  <dt>Messages</dt>
                  <dd>Count</dd>
                </dl>
              </div>
              <div className="note-extra">
                <div className="node-extra icon"></div>
                <div className="node-text">Content</div>
                <div className="note-text">Date</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;