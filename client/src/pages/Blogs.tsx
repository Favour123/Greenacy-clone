import React from 'react';
import { Link } from 'react-router-dom';
import { blogs } from '../components/data/Blog';

const Blogs: React.FC = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <div className="flex flex-row gap-8 mt-12 mb-8 flex-wrap justify-center px-3 md:px-0">
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
    </div>
  );
};

export default Blogs;
