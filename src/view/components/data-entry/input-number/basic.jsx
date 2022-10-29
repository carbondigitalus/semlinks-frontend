import React, { useState } from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monoBlue } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { basic } from './code.js';

import { Card, Row, Col, InputNumber, Button } from 'antd';
import { RiCodeSSlashLine } from 'react-icons/ri';

export default function BasicInputNumber() {
  const [checkedCode, setCheckedCode] = useState(false);
  const [codeClass, setCodeClass] = useState(false);

  function toggleChecked() {
    setTimeout(() => setCodeClass(!codeClass), 100);
    setCheckedCode(!checkedCode);
  }

  function onChange(value) {
    console.log('changed', value);
  }

  return (
    <Card className="hp-border-color-black-40">
      <Row>
        <Col className="hp-mb-16" lg={12} span={20}>
          <h4>Basic</h4>
          <p className="hp-p1-body">Numeric-only input box.</p>
        </Col>

        <Col lg={12} span={4} className="hp-text-right">
          <Button onClick={toggleChecked} type="text" icon={<RiCodeSSlashLine className="hp-text-color-black-80" />} />
        </Col>

        <Col span={12}>
          <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
        </Col>
      </Row>

      {checkedCode && (
        <SyntaxHighlighter
          language="javascript"
          className={`show-code hp-mt-24 ${codeClass && 'show-code-active'}`}
          style={monoBlue}
        >
          {basic}
        </SyntaxHighlighter>
      )}
    </Card>
  );
}
