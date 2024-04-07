import React from 'react';
import { Table } from "antd";
import "../css/index.css";

const columns = [
    {
      title: "Product",
      dataIndex: "product",
      key: "product",
      render: (text, record) => (
        <span style={{
          display:"flex",
          alignItems:"center",
          fontFamily:"roboto",
          fontSize:'12px',
          fontWeight:'500'
        }}>
          <img
            src={record.image}
            alt={text}
            style={{
              marginRight: "8px",
              width: "24px",
              height: "24px",
              borderRadius: "5px",
            }}
          />
          {text}
        </span>
      ),
    },
    {
      title: "Sold amount",
      dataIndex: "soldamount",
      key: "soldamount",
    },
    {
      title: "Unit price",
      dataIndex: "unitprice",
      key: "unitprice",
    },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
  ];
  
  const data = [
    {
      key: "1",
      product: "Camera Mi 360°",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 432,
      unitprice: "$120",
      revenue: "$51,840",
      rating: "⭐4.81",
    },
    {
      key: "2",
      product: "Massage Gun",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 120,
      unitprice: "$112",
      revenue: "$25,440",
      rating: "⭐3.44",
    },
    {
      key: "3",
      product: "Vacuum-Mop 2 Pro",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 221,
      unitprice: "$320",
      revenue: "$15,123",
      rating: "⭐3.22",
    },
    {
      key: "4",
      product: "Vacuum-Mop 2",
      image:
        "https://img.freepik.com/free-photo/beauty-products-recipients-assortment-grey-stones_23-2148761390.jpg?w=996&t=st=1710674547~exp=1710675147~hmac=c7af1427e4b860876ddefd0361618eb604f7add886c0e9c4289d75942e7322ed",
      soldamount: 223,
      unitprice: "$234",
      revenue: "$32,812",
      rating: "⭐3.00",
    },
  ];

const TopProducts = () => {
  return (
    <Table className="table"
    columns={columns}
    dataSource={data}
    pagination={false}
  />
  );
}

export default TopProducts;
