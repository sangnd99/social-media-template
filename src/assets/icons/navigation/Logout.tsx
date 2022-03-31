interface ILogoutIconProps extends React.SVGProps<SVGSVGElement> {}

const LogoutIcon: React.FC<ILogoutIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={16}
      height={14}
      viewBox="0 0 16 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path d="M12.495 6.274 4.952 1.893a.38.38 0 0 0-.57.331v1.697c0 .212-.17.383-.382.383H.38a.382.382 0 0 0-.38.383v3.837c0 .213.17.384.38.384H4a.38.38 0 0 1 .381.383v1.696a.38.38 0 0 0 .57.332l7.542-4.382a.384.384 0 0 0 .002-.663Z" />
      <path d="M11.583 1.569h2.625v10.864h-2.625V14H16V0h-4.417v1.569Z" />
    </svg>
  );
};

export default LogoutIcon;
