import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './import';
import './blog.css';

const Blog = () => {
  return (
    <div className="genz__blog section__padding" id="blog">
      <div className="genz__blog-heading">
        <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
      </div>
      <div className="genz__blog-container">
        <div className="genz__blog-container_groupA">
          <Article imgUrl={blog01} date="Feb 20, 2023" text="GEN-Z and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="genz__blog-container_groupB">
          <Article imgUrl={blog02} date="Feb 20, 2023" text="GEN-Z and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog03} date="Feb 20, 2023" text="GEN-Z and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog04} date="Feb 20, 2023" text="GEN-Z and Open  AI is the future. Let us exlore how it is?" />
          <Article imgUrl={blog05} date="Feb 20, 2023" text="GEN-Z and Open  AI is the future. Let us exlore how it is?" />
        </div>
      </div>
    </div>
  );
}

export default Blog