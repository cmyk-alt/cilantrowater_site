type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // Increased sizes by another ~30%: 100 -> 130, 68 -> 88
  const size = props.xl ? 130 : 88;
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <img
        src="/assets/images/logo.jpeg"
        alt="Cilantro Water"
        width={size}
        height={size}
        className="mr-2 rounded-md"
      />
      {/* Text removed as requested */}
    </span>
  );
};

export { Logo };
