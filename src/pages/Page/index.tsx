import { PageProps } from "./model";

const Page = (props: PageProps) => {
  const { title } = props;
  return <>{title}</>;
};

export default Page;
