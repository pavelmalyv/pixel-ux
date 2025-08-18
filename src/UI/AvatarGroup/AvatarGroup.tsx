import type { AppImage } from "@shared/entities/appImage/appImage";
import { Avatar, AvatarGroup as BaseAvatarGroup, createTheme, ThemeProvider } from "flowbite-react";
import Image from "@UI/Image/Image";

interface AvatarGroupProps {
  children: React.ReactNode;
}

const avatarGroupTheme = createTheme({
  avatar: {
    root: {
      stacked: "rounded-full ring-5 ring-stroke-quaternary !w-13 !h-auto aspect-square",
    },
    group: {
      base: "flex -space-x-3",
    },
  },
});

const AvatarGroup = ({ children }: AvatarGroupProps) => {
  return (
    <ThemeProvider theme={avatarGroupTheme}>
      <BaseAvatarGroup>{children}</BaseAvatarGroup>
    </ThemeProvider>
  );
};

interface ItemProps {
  appImage: AppImage;
}

const Item = ({ appImage }: ItemProps) => {
  return (
    <Avatar
      rounded
      stacked
      img={({ className, ...props }) => <Image {...props} {...appImage} className={className} />}
    />
  );
};

AvatarGroup.Item = Item;
export default AvatarGroup;
