interface IPictureIconProps extends React.SVGProps<SVGSVGElement> {}

const PictureIcon: React.FC<IPictureIconProps> = ({ ...restProps }) => {
  return (
    <svg
      width={20}
      height={16}
      viewBox="0 0 20 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8044 6.10352e-05H0.212039C0.101779 6.10352e-05 0 0.0871466 0 0.2059V15.7784C0 15.9051 0.101779 16.0001 0.212039 16.0001H19.7959C19.9146 16.0001 19.9995 15.9051 19.9995 15.7784V0.2059C20.0079 0.0871466 19.9146 6.10352e-05 19.8044 6.10352e-05ZM5.01259 3.78433C5.81833 3.78433 6.44597 4.37809 6.44597 5.12228C6.44597 5.86646 5.81833 6.46023 5.01259 6.46023C4.24925 6.46023 3.58769 5.86646 3.58769 5.12228C3.58769 4.37809 4.24925 3.78433 5.01259 3.78433ZM3.82517 12.8254L5.67415 9.00155L7.88783 11.0441L10.4068 7.25983L13.8079 10.6245L16.8104 4.82935L17.455 12.8333H3.82517V12.8254Z"
      />
    </svg>
  );
};

export default PictureIcon;
