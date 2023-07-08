import React from "react";
const commentsData = [
  {
    name: "Vishal",
    text: "Comments from vishal",
    replies: [
      {
        name: "Vishal",
        text: "replies from vishal",
        replies: [
          {
            name: "Vishal",
            text: "replies from vishal",
            replies: [
              {
                name: "Vishal",
                text: "replies from vishal",
                replies: [
                  {
                    name: "Vishal",
                    text: "replies from vishal",
                    replies: [],
                  },
                ],
              },
              {
                name: "Vishal",
                text: "replies from vishal",
                replies: [],
              },
              {
                name: "Vishal",
                text: "replies from vishal",
                replies: [],
              },
            ],
          },
          {
            name: "Vishal",
            text: "replies from vishal",
            replies: [],
          },
          {
            name: "Vishal",
            text: "replies from vishal",
            replies: [],
          },
        ],
      },
      {
        name: "Vishal",
        text: "replies from vishal",
        replies: [
          {
            name: "Vishal",
            text: "replies from vishal",
            replies: [],
          },
          {
            name: "Vishal",
            text: "replies from vishal",
            replies: [],
          },
          {
            name: "Vishal",
            text: "replies from vishal",
            replies: [],
          },
        ],
      },
      {
        name: "Vishal",
        text: "replies from vishal",
        replies: [],
      },
      {
        name: "Vishal",
        text: "Comments from vishal",
        replies: [],
      },
    ],
  },
  {
    name: "Vishal",
    text: "Comments from vishal",
    replies: [
      {
        name: "Vishal",
        text: "Comments from vishal",
        replies: [],
      },
      {
        name: "Vishal",
        text: "Comments from vishal",
        replies: [],
      },
      {
        name: "Vishal",
        text: "Comments from vishal",
        replies: [],
      },
      {
        name: "Vishal",
        text: "Comments from vishal",
        replies: [],
      },
      {
        name: "Vishal",
        text: "Comments from vishal",
        replies: [],
      },
    ],
  },
  {
    name: "Vishal",
    text: "Comments from vishal",
    replies: [],
  },
  {
    name: "Vishal",
    text: "Comments from vishal",
    replies: [],
  },
  {
    name: "Vishal",
    text: "Comments from vishal",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies  } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
        alt="user"
        className="w-12 h-12"
      />
      <div>
        <p className="font-bold">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}    >
      <Comment  data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="pt-5">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
