import React, { useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../helpers/axios";
import PostCard from "./PostCard";
import { PostCardType } from "../helpers/types";
import { Row, Col, Button } from "antd";

interface P {
  userId: number;
  username: string;
  goBack: () => void;
}

const Posts = ({ userId, username, goBack }: P) => {
  const [posts, setPosts] = useState<PostCardType[]>([]);

  useEffect(() => {
    axios.get(`${baseURL}/posts`).then((response) => {
      setPosts(
        response.data
          .filter((item: any) => item.userId === userId)
          .map((res: any) => {
            return {
              title: res.title,
              body: res.body,
            };
          })
      );
    });
  }, []);

  console.log(posts);

  return (
    <div>
      <Row>
        <Col span={8}>
          <h1>{username}'s Posts</h1>
        </Col>
        <Col span={8} offset={8}>
          <Button onClick={goBack}>Go Back</Button>
        </Col>
      </Row>
      {posts.map((item) => {
        return <PostCard body={item.body} title={item.title} />;
      })}
    </div>
  );
};

export default Posts;
