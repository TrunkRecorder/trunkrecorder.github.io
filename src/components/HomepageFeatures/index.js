import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: "Don't just scan",
    Svg: require('@site/static/img/undraw_recording.svg').default,
    description: (
      <>
        Instead of listening to a single channel, listen to all of them. Simultaneously capture all of the transmission from a radio system. 
      </>
    ),
  },
  {
    title: 'Go Digital!',
    Svg: require('@site/static/img/undraw_code.svg').default,
    description: (
      <>
        Works with Trunked and Conventional radio systems. Captures Project 25 Phase 1 & 2, Motorola SmartNet, and DMR systems... and of course analog!
      </>
    ),
  },
  {
    title: 'Low Cost',
    Svg: require('@site/static/img/undraw_savings.svg').default,
    description: (
      <>
        You can get started with $25 SDR dongle and a Raspberry Pi... or any computer that can run Linux (or a Mac!)
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
