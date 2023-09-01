import * as Icons from "@mui/icons-material";

type IconName = keyof typeof Icons;

type CompProps = {
  iconName: any;
  size: any;
};

const DynamicIcon = ({ iconName, size }: CompProps) => {
  const IconComponent = Icons[iconName as IconName];

  if (!IconComponent) {
    return <div>x</div>;
  }

  return <IconComponent fontSize={size} />;
};

export default DynamicIcon;
