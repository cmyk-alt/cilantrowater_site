import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    id="process"
    title="Our Treatment Process"
    description="We follow a rigorous multi-step process to ensure the highest quality water."
  >
    <VerticalFeatureRow
      title="Fully Automatic Plant"
      description="Manufacturing facility that incorporates a no-human touch process, supplied in clear polycarbonate jars."
      image="/assets/images/treatment_process.jpeg"
      imageAlt="Fully Automatic Plant"
      reverse
    />
    <VerticalFeatureRow
      title="Advanced Purification"
      description="Water passed through a special pesticide removal process (a first in the Indian packaged drinking water segment)."
      image="/assets/images/RO.jpeg"
      imageAlt="Pesticide Removal Process"
    />
    <VerticalFeatureRow
      title="Reverse Osmosis"
      description="Water with a guarantee of purification using the best in Reverse Osmosis technology"
      image="/assets/images/treatment_process.jpeg"
      imageAlt="Reverse Osmosis"
      reverse
    />

    <VerticalFeatureRow
      title="Sanitization System"
      description="CIP (Clean-In-Place) system to sanitise tanks & piping (a first for the water industry)."
      image="/assets/images/RO.jpeg"
      imageAlt="Sanitization System"
    />
  </Section>
);

export { VerticalFeatures };
