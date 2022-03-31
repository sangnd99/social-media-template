interface IMessengerIconProps extends React.SVGProps<SVGSVGElement> {}

const MessengerIcon: React.FC<IMessengerIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={17}
      height={14}
      viewBox="0 0 17 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.049 1.08c.043.774.36 6.14.36 6.14s-.137 1.516 1.063.311 6.108-6.108 6.108-6.108S17.807 0 16.067 0H5.111A4.313 4.313 0 0 0 .814 4.297c0 1.184.485 2.258 1.26 3.032l5.944-5.944c.005 0 .992-1.025 1.03-.305Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.952 12.461c-.043-.774-.36-6.14-.36-6.14S7.73 4.804 6.53 6.01C5.33 7.215.421 12.118.421 12.118S-.806 13.54.928 13.54h10.956a4.313 4.313 0 0 0 4.298-4.297 4.283 4.283 0 0 0-1.26-3.033l-5.944 5.945c0-.006-.987 1.025-1.026.305Z"
      />
    </svg>
  );
};

export default MessengerIcon;
