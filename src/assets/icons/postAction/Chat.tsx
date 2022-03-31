interface IChatIconProps extends React.SVGProps<SVGSVGElement> {}

const ChatIcon: React.FC<IChatIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={20}
      height={17}
      viewBox="0 0 20 17"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path
        d="M15.9862 13.9512L15.6251 14.0189L15.4757 14.3546L14.6234 16.2706L13.1553 14.3031L12.9453 14.0217H12.5942H4.72727C2.5372 14.0217 0.7 12.1561 0.7 9.83282V4.88889C0.7 2.56561 2.5372 0.7 4.72727 0.7H15.2639C17.4532 0.7 19.2917 2.56511 19.3 4.89009V9.83282C19.3 11.8983 17.8466 13.602 15.9862 13.9512Z"
        strokeWidth="1.4"
      />
    </svg>
  );
};

export default ChatIcon;
