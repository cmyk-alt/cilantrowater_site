import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Have questions? Reach out to us."
      subtitle={
        <div className="mt-8 text-lg font-light leading-relaxed">
          <p className="mb-2 font-bold text-gray-800">Address:</p>
          <p>Plot No. R-680, Rabale MIDC,</p>
          <p>Navi Mumbai - 400701</p>
          <p className="mt-2">Email: nyasa.cilantro@cilantrowater.com</p>
          <p className="mt-2 text-sm font-bold">GSTIN: 27AACCN7104K1ZF</p>
        </div>
      }
    />
  </Section>
);

export { Banner };
