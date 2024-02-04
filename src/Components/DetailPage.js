import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setOpenPost } from "../redux/features/openPostSlice";

const Post = ({ Post }) => {
  const [readMore, setReadMore] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);

  const [image, setImage] = useState(
    `https://picsum.photos/200?random=${Post.id}`
  );

  const dispatch = useDispatch();

  const PostBodyRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (PostBodyRef.current) {
      const isOverflowing =
        PostBodyRef.current.scrollHeight > PostBodyRef.current.clientHeight;
      setIsOverflowing(isOverflowing);
    }
  }, [Post.body]);

  return (
    <div className="bg-white rounded-lg w-fit p-5 drop-shadow-xl">
      <div className="">
        <img
          src={image}
          className="bg-cover w-full h-full rounded-2xl drop-shadow-lg"
        />
      </div>
      <div className="flex items-center justify-between mt-3 gap-2">
        <div className="">
          <p className="font-semibold text-lg h-9 overflow-hidden">
            {Post.title}
          </p>
          <p
            className={`text-gray-500 h-36 text-md overflow-hidden ${
              isOverflowing ? "max-h-36" : ""
            }`}
            ref={PostBodyRef}
          >
            {Post.body}
          </p>
          <span
            className="text-dark-orange font-semibold cursor-pointer"
            onClick={() => {
              dispatch(setOpenPost({ ...Post, image }));
              navigate(`/Post/detail/${Post.id}`);
            }}
          >
            {isOverflowing && "Read more..."}
          </span>
        </div>
        <div
          className="p-3 bg-black flex items-center cursor-pointer justify-center bg-gradient-to-r from-light-orange -rotate-90 to-dark-orange rounded-md  hover:from-dark-orange hover:to-dark-orange"
          onClick={() => {
            navigate(`/Post/detail/${Post.id}`);
            dispatch(setOpenPost({ ...Post, image }));
          }}
        >
          <FaAngleRight className="text-white rotate-90 text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Post;