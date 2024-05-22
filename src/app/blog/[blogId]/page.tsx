import React from "react";

const BlogIdServer = ({ params }: { params: { blogId: number | string } }) => {
  return <div>{params.blogId}</div>;
};

export default BlogIdServer;
