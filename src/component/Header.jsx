import React from "react";
import { Flex, Typography } from "antd";

export default function Header() {
  return (
    <Flex>
      <Typography.Title level={3} type="secondary">
        Book Store
      </Typography.Title>
    </Flex>
  );
}
