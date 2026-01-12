import { useState } from 'react';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Banner } from './Banner';
import { Hero } from './Hero';
import { IntroOverlay } from './IntroOverlay';
import { VerticalFeatures } from './VerticalFeatures';

const Base = () => {
  const [introDone, setIntroDone] = useState(false);

  return (
    <div className="text-gray-600 antialiased">
      <Meta title={AppConfig.title} description={AppConfig.description} />

      {!introDone && <IntroOverlay onComplete={() => setIntroDone(true)} />}

      <div className="bg-gradient-to-b from-gray-50 to-primary-100">
        <Hero hideLogo={!introDone} />
      </div>
      <div className="bg-gradient-to-b from-white to-primary-50">
        <VerticalFeatures />
      </div>
      <div id="contact" className="bg-primary-100">
        <Banner />
      </div>
    </div>
  );
};

export { Base };
