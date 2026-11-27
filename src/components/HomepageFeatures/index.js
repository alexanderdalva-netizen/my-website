import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Fitness Tips',
    image: require('@site/static/img/fitness-tips.jpeg').default,
    description: (
      <>
        Learn practical fitness tips to improve your strength, health, and overall wellness.
      </>
    ),
  },
  {
    title: 'Workout Plans',
    image: require('@site/static/img/workout-plans.jpeg').default,
    description: (
      <>
        Discover beginner-friendly workout routines designed to help you stay active and achieve your fitness goals.
      </>
    ),
  },
  {
    title: 'Healthy Living',
    image: require('@site/static/img/healthy-living.jpeg').default,
    description: (
      <>
        Explore nutrition, recovery, and healthy lifestyle habits that support long-term fitness success.
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
  src={image}
  className={styles.featureSvg}
  alt={title}
/>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
