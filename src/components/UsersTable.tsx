import { Table, Row, Col } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseURL } from "../helpers/axios";
import { columns } from "../helpers/tableHelpers";

interface P {
  getUser: (id: number, username: string) => void;
}

const UsersTable = ({ getUser }: P) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/users`).then((response) => {
      setUsers(
        response.data.map((res: any) => {
          return {
            id: res.id,
            name: res.name,
            email: res.email,
            phone: res.phone,
            website: res.website,
            username: res.username,
            address: `${res.address.street} ${res.address.suite}, ${res.address.city}, ${res.address.zipcode}`,
            company: res.company.name,
          };
        })
      );
    });
  }, []);

  console.log(users);

  return (
    <div>
      <Row>
        <Col offset={7} span={8}>
          <h1>All Users</h1>
        </Col>
      </Row>
      <Table
        dataSource={users}
        columns={columns}
        onRow={(record: any) => {
          return {
            onClick: () => {
              getUser(record.id, record.username);
            },
          };
        }}
      />
      ;
    </div>
  );
};

export default UsersTable;
