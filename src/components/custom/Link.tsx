import NextLink, { LinkProps } from "next/link";

const Link: React.FC<LinkProps> = ({ children, ...restProps }) => {
  return (
    <NextLink {...(restProps as any)} passHref>
      <a>{children}</a>
    </NextLink>
  );
};

export default Link;
