import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string | ReactNode;
  button?: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="flex flex-col rounded-md bg-primary-100 p-8 text-center sm:flex-row sm:items-center sm:justify-between sm:p-16 sm:text-left">
    <div className="text-2xl font-semibold">
      <div className="text-gray-900">{props.title}</div>
      <div className="text-primary-500">{props.subtitle}</div>
    </div>

    {props.button && (
      <div className="whitespace-no-wrap mt-3 sm:ml-2 sm:mt-0">
        {props.button}
      </div>
    )}
  </div>
);

export { CTABanner };
