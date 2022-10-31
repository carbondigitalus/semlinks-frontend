import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { type } from './code.js';

import { Tabs, Row, Col, Card, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

const { TabPane } = Tabs;

export default function TabsType() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function callback(key) {
    console.log(key);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Card Type Tab</h4>
          <p className="hp-p1-body">Another type of Tabs, which doesn&apos;t support vertical mode.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button onClick={toggleChecked} type="text" icon={<RiCodeSSlashLine className="hp-text-color-black-80" />} />
        </Col>

        <Col span={24}>
          <Tabs onChange={callback} type="card">
            <TabPane tab="Tab 1" key="1">
              Content of Tab Pane 1
            </TabPane>

            <TabPane tab="Tab 2" key="2">
              Content of Tab Pane 2
            </TabPane>

            <TabPane tab="Tab 3" key="3">
              Content of Tab Pane 3
            </TabPane>
          </Tabs>
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {type}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
