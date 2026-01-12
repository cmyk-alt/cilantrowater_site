import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

type IHeroProps = {
  hideLogo?: boolean;
};

const Hero = (props: IHeroProps) => (
  // Gradient applied in section or parent
  <>
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />} hideLogo={props.hideLogo}>
        {/* About Us link removed as requested */}
        <li>
          <Link
            href="#process"
            className="rounded-md bg-primary-500 px-5 py-2 text-white hover:bg-primary-600 hover:text-white"
          >
            Treatment Process
          </Link>
        </li>
        <li>
          <Link
            href="#contact"
            className="rounded-md bg-primary-500 px-5 py-2 text-white hover:bg-primary-600 hover:text-white"
          >
            Contact Us
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section id="about" className="scroll-mt-40" yPadding="pt-32 pb-32">
      <HeroOneButton
        title={
          <>
            {/* Heading removed */}
          </>
        }
        description="At “Cilantro™” we believe in the ideology of Service and Quality. It is for this reason alone, we have imbibed the latest specifications followed by the EU (European Union), along with all the necessary specifications of our local authorities, thus bringing out the absolute best in standards for packaged drinking water."
        button={
          <Link href="#process">
            <Button xl>Our Process</Button>
          </Link>
        }
      />
    </Section>
  </>
);

export { Hero };
