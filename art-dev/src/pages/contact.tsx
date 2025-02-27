import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Contact(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="تماس با ما"
      description="صفحه تماس با ما">
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>تماس با ما</h1>
        <p>این صفحه در حال حاضر در دست ساخت می‌باشد.</p>
      </div>
    </Layout>
  );
}
