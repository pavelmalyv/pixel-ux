interface IconProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

const Icon = ({ Icon }: IconProps) => {
  return <Icon className="w-[1em] h-[1em] fill-current" />;
};
export default Icon;
