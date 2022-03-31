interface IHomeIconProps extends React.SVGProps<SVGSVGElement> {}

const HomeIcon: React.FC<IHomeIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={17}
      height={15}
      viewBox="0 0 17 15"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path d="M16.695 4.736 8.815.086a.624.624 0 0 0-.63 0l-7.88 4.65c-.543.32-.314 1.15.316 1.15h1.016c.343 0 .62.276.62.617v7.88c0 .34.278.617.62.617h2.896c.342 0 .62-.276.62-.618V9.225c0-.34.277-.617.62-.617h2.972c.343 0 .62.276.62.617v5.155c0 .342.278.618.62.618h2.896c.342 0 .62-.276.62-.618V6.503c0-.341.277-.618.62-.618h1.016c.632 0 .861-.83.318-1.15Z" />
    </svg>
  );
};

export default HomeIcon;
