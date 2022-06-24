import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

import Modal from 'react-bootstrap/Modal';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import LoginBody from './LoginBody';
import SignupBody from './SignupBody';
import ForgottenPwdBody from './ForgottenPwdBody';

function LoginA() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [key, setKey] = useState('login');

  return (
    <>
      <button
        onClick={() => {
          handleShow();
        }}
      >
        登入註冊
      </button>

      <Modal show={show} onHide={handleClose} className="LoginSignup">
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
          className="login_header d-flex"
        >
          <Tab eventKey="signup" title="註冊">
            <SignupBody />
          </Tab>
          <Tab eventKey="login" title="登入">
            <LoginBody />
          </Tab>
          <Tab eventKey="forgotten_pwd" title="忘記密碼">
            <ForgottenPwdBody />
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
}

export default LoginA;
