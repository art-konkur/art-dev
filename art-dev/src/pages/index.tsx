import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
             🌀 ورود به دنیای هنر 
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`خوش آمدید به ${siteConfig.title}`}
      description="مرجع تخصصی آموزش و منابع کنکور هنر">
      <div className={styles.rtl}>
        <HomepageHeader />
        <main>
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                <div className="col col--4">
                  <div className="text--center">
                    <img className={styles.featureSvg} src="img/undraw_docusaurus_mountain.svg" alt="آموزش تخصصی" />
                  </div>
                  <div className="text--center padding-horiz--md">
                    <h3>آموزش تخصصی</h3>
                    <p>دوره‌های تخصصی طراحی، نقاشی، خوشنویسی و سایر دروس هنری برای موفقیت در کنکور هنر</p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="text--center">
                    <img className={styles.featureSvg} src="img/undraw_docusaurus_tree.svg" alt="منابع کنکور" />
                  </div>
                  <div className="text--center padding-horiz--md">
                    <h3>منابع کنکور</h3>
                    <p>دسترسی به منابع اختصاصی کنکور هنر، سوالات سال‌های گذشته و بودجه‌بندی دروس تخصصی</p>
                  </div>
                </div>
                <div className="col col--4">
                  <div className="text--center">
                    <img className={styles.featureSvg} src="img/undraw_docusaurus_react.svg" alt="مشاوره تخصصی" />
                  </div>
                  <div className="text--center padding-horiz--md">
                    <h3>مشاوره تخصصی</h3>
                    <p>دریافت مشاوره تخصصی از اساتید باتجربه و رتبه‌های برتر کنکور سال‌های گذشته</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.cta}>
            <div className="container">
              <div className="row">
                <div className="col col--8 col--offset-2">
                  <div className="text--center padding-horiz--md">
                    <h2>همین امروز مسیر موفقیت در کنکور هنر را آغاز کنید</h2>
                    <p>با همراهی اساتید مجرب و محتوای آموزشی بروز، قبولی در رشته دلخواه‌تان را تضمین کنید</p>
                    <div className={styles.ctaButtons}>
                      <Link
                        className="button button--primary button--lg margin-right--md"
                        to="/docs/intro">
                        شروع دوره آموزشی
                      </Link>
                      <Link
                        className="button button--outline button--lg"
                        to="/contact">
                        مشاوره رایگان
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
}