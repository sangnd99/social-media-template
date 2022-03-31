interface INotificationIconProps extends React.SVGProps<SVGSVGElement> {}

const NotificationIcon: React.FC<INotificationIconProps> = ({
  ...restProps
}) => {
  return (
    <svg
      width={16}
      height={17}
      viewBox="0 0 16 17"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...(restProps as any)}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.701 13.9c-1.898-.825-1.976-4.325-1.976-4.412l.007-2.364c0-2.259-1.444-4.214-3.517-5.039 0-2.78-4.434-2.78-4.434 0-2.067.82-3.51 2.78-3.51 5.039v2.364c0 .087-.078 3.587-1.976 4.412a.46.46 0 0 0-.28.54c.039.217.24.373.494.373h4.804a2.61 2.61 0 0 0 .76 1.396 2.76 2.76 0 0 0 3.869 0c.39-.397.656-.881.747-1.396h4.81c.248 0 .456-.162.488-.373a.462.462 0 0 0-.286-.54Zm-2.496-1.688c.201.578.488 1.167.884 1.651H1.92c.39-.484.677-1.08.885-1.65h10.401Z"
      />
    </svg>
  );
};

export default NotificationIcon;
