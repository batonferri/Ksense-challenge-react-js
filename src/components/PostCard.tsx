import React from "react";
import { Card } from "antd";

interface P {
  title: string;
  body: string;
}

const PostCard = ({ title, body }: P) => {
  return (
    <Card type="inner" title={title}>
      {body}
    </Card>
  );
};

export default PostCard;
