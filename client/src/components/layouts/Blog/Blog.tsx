import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../../data/Blog';
import {ArrowUpRight} from "phosphor-react"
const Blog: React.FC = () => {
  return (
        <>
        <div className="max-w-4xl mx-auto text-center my-8">
               <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-[#199c38] text-sm font-semibold tracking-widest"> Green Articles</span>
               </div>
               <h2 className="text-[#005F0A] text-3xl md:text-4xl font-bold mb-2">Latest Blog Post</h2>
            </div>

    <div className="flex flex-col w-full items-center min-h-screen bg-white">

      <div className="flex flex-row w-full gap-8 mt-12 mb-8 flex-wrap justify-center px-3 md:px-0 ">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-green-50 rounded-xl shadow-md w-full md:w-80 flex flex-col items-center pb-6 "
          >
            <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-green-700 text-white rounded-md px-3 py-1 font-semibold text-base tracking-wider">
                {blog.date}
              </div>
            </div>
            <div className="px-5 pt-6 w-full">
              <h3 className="text-green-700 font-bold text-lg mb-3 leading-snug">
                {blog.title}
              </h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                {blog.excerpt}
              </p>
              <Link to={`/blogs/${blog.id}`} className="inline-block">
                <button
                  className="border-2 border-green-700 text-green-700 bg-transparent rounded-md px-6 py-2 font-medium text-base transition-colors duration-200 hover:bg-green-700 hover:text-white"
                >
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link to="/blogs" className="no-underline mb-4">
        <button className="bg-green-700 text-white rounded-full px-9 py-3 font-semibold text-lg mt-4 shadow-md flex items-center gap-2 hover:bg-green-800 transition-colors">
          VISIT OUR BLOG <span className="text-2xl ml-1"> <ArrowUpRight size={20}   /></span>
        </button>
      </Link>
    </div>

    </>
  );
};

export default Blog;
