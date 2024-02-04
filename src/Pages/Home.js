import React, { useEffect, useState } from "react";

import { IoMdSearch } from "react-icons/io";

import Post from "../Components/DetailPage";

import axios from "axios";

import { BsArrowClockwise } from "react-icons/bs";

import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../redux/features/Posts";

const Home = () => {
  const [search, setSearch] = useState("");

  const Posts = useSelector((state) => state.Posts.Posts);

  const loading = useSelector((state) => state.Posts.loading);

  const [filteredPost, setFilteredPost] = useState(
    useSelector((state) => state.Posts.Posts)
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    let newArrr = [];
    if (Posts) {
      setFilteredPost(
        Posts.filter((Post) => {
          if (Post.title.includes(search)) {
            return Post;
          }
          return null;
        })
      );
    }
  }, [search, Posts]);

  return (
    <div className="flex flex-col p-10 gap-10 bg-gray-100">
      <div className="text-2xl font-semibold">Social Media For Travellers</div>
      <div className="flex items-center gap-3 bg-white p-3 rounded-md drop-shadow-xl">
        <IoMdSearch className="text-gray-500" />
        <input
          type="text"
          placeholder="Search here..."
          className="w-full outline-none"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>
      {!loading ? (
        <div className="container grid grid-cols-3 xl:grid-cols-4 max-lg-grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 flex gap-5 flex-wrap ">
          {filteredPost &&
            filteredPost.map((Post) => {
              return <Post Post={Post} key={Post.id} />;
            })}
        </div>
      ) : (
        <div className="flex items-center justify-center items-center w-full h-full">
          <BsArrowClockwise className="animate-spin text-6xl text-dark-orange" />
        </div>
      )}
    </div>
  );
};

export default Home;