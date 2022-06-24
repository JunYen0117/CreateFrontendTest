import ASidebar from '../../components/AccountSidebar/ASidebar';
import Article from '../../components/Fav/Article';
import Activity from '../../components/Fav/Activity';
import Product from '../../components/Fav/Product';
import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';

const FavList = () => {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="product">
      <Row>
        <ASidebar />
        <Col sm={8}>
          <h1 className="Fl_title ">我的收藏</h1>
          <Nav className="Fl_nav" defaultActiveKey="product">
            <Nav.Item className=" Fl_item mt-3 ">
              <Nav.Link className="Fl_btn" eventKey="product">
                商品
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className=" Fl_item mt-3 ">
              <Nav.Link className=" Fl_btn" eventKey="article">
                文章
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="Fl_item mt-3 ">
              <Nav.Link className=" Fl_btn" eventKey="activity">
                活動
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Col sm={14}>
            <Tab.Content className="mb-5 row mt-3">
              <Tab.Pane className="" eventKey="product">
                <Product />
              </Tab.Pane>
              <Tab.Pane eventKey="article">
                <Article />
              </Tab.Pane>
              <Tab.Pane eventKey="activity">
                <Activity />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default FavList;
