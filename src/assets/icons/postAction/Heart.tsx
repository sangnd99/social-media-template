interface IHeartIconProps extends React.SVGProps<SVGSVGElement> {}

const HeartIcon: React.FC<IHeartIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={23}
      height={17}
      viewBox="0 0 23 17"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path
        d="M3.40075 8.89224L3.3866 8.87984L3.3718 8.86822C1.39807 7.31778 1.0489 4.42104 2.60511 2.44367L2.60616 2.44233C4.15407 0.465677 7.04456 0.116708 9.01772 1.67444L9.01836 1.67495L11.1087 3.32116L11.5418 3.66225L11.9749 3.32116L14.0652 1.67495L14.0658 1.67444C16.0381 0.117368 18.9208 0.464551 20.4784 2.44367C22.034 4.4202 21.6866 7.30913 19.7104 8.86927L19.6963 8.8804L19.6828 8.89224L19.6253 8.9426L11.5418 15.3008L3.45823 8.94262L3.40075 8.89224Z"
        strokeWidth="1.4"
      />
    </svg>
  );
};

export default HeartIcon;
