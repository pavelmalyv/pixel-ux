interface AnimatedDigitProps {
  countRef: React.RefObject<HTMLDivElement | null>;
  end: string | number;
}

const AnimatedDigit = ({ end, countRef }: AnimatedDigitProps) => {
  return (
    <span className="inline-flex relative">
      <span className="invisible">{end}</span>
      <span ref={countRef} className="absolute top-0 w-full text-center"></span>
    </span>
  );
};
export default AnimatedDigit;
