interface AnimatedHoverTextProps {
  children: React.ReactNode;
}

const AnimatedHoverText = ({ children }: AnimatedHoverTextProps) => {
  return <div className="inline-block">{children}</div>;
};
export default AnimatedHoverText;
