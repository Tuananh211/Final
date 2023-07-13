import React from "react";
import "./quotes.css";
import { useState } from "react";
import { Input, Button, Col, Row, Card } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const Quotes = () => {
  const [numQuotes, setNum] = useState();
  const [quotes, setQuotes] = useState([]);
  async function restApi() {
    const response = await fetch("http://localhost:3000/quotes", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ num: numQuotes }), // body data type must match "Content-Type" header
    });

    const data = await response.json();
    setQuotes(data);
    console.log(data);
  }
  return (
    <div className="wrapper1">
      <h1>Quotes of The Day</h1>
      <div className="actionBtn">
        <Input
          type="Number"
          placeholder="Number of quote"
          style={{ background: "#ffff", color: "black" }}
          onChange={(e) => {
            setNum(e.target.value);
          }}
        />
        <Button icon={<SearchOutlined />} onClick={() => restApi()}>
          Search
        </Button>
      </div>
      <div className="quotes">
        <Row gutter={[16, 20]}>
          {quotes.map((quote, index) => {
            return (
              <Col span={8} key={index} title="">
                <Card
                  className="quote"
                  title={quote.author}
                  bordered={false}
                  hoverable
                  bodyStyle={{
                    // textAlign: 'center',
                    fontFamily: "'Dancing Script', cursive",
                    fontSize: "22px",
                    fontWeight: "600",
                    fontStyle: "italic",
                    // overflow: "hidden",
                    textOverflow: "ellipsis",
                    padding: "14px",
                    whiteSpace: "wrap",
                  }}
                >
                  {quote.quote}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default Quotes;
