import type { AppImage } from "@shared/entities/appImage/appImage";

import classNames from "classnames";
import Image from "@UI/Image/Image";

interface ItemBase {
  title: string;
  isMobileLast?: boolean;
  iconImage: AppImage;
  children: React.ReactNode;
}

interface ItemDefault extends ItemBase {
  variant?: "default";
  mainLogo?: never;
  mainLogoBackground?: never;
  appImage?: never;
}

interface ItemLogo extends ItemBase {
  variant: "logo";
  mainLogo: AppImage;
  mainLogoBackground: string;
  appImage?: never;
}

interface ItemImage extends ItemBase {
  variant: "image";
  appImage: AppImage;
  mainLogo?: never;
  mainLogoBackground?: never;
}

type ServicesItemProps = ItemDefault | ItemLogo | ItemImage;

const ServicesItem = ({
  variant = "default",
  title,
  iconImage,
  mainLogo,
  mainLogoBackground,
  appImage,
  isMobileLast,
  children,
}: ServicesItemProps) => {
  const styles = {
    container: {
      base: "app-bg relative p-5 h-full rounded-sm",
      variant: {
        default: "",
        logo: "lg:col-span-2 max-lg:row-span-2",
        image: "row-span-2",
      },
      mobileLast: {
        true: "max-sm:order-last",
        false: "",
      },
    },
    body: {
      base: "relative",
      variant: {
        default: "",
        logo: "flex items-center justify-between max-lg:flex-col lg:gap-x-5 max-lg:gap-y-10 max-sm:gap-y-7 h-full",
        image: "flex flex-col gap-y-10 max-sm:gap-y-7 h-full",
      },
    },
    inner: {
      base: "space-y-4.5 py-2",
      variant: {
        default: "",
        logo: "lg:max-w-85",
        image: "",
      },
    },
    icon: {
      base: "w-6 aspect-square",
      variant: {
        default: "dark:brightness-0 dark:invert-100",
        logo: "",
        image: "dark:brightness-0 dark:invert-100",
      },
    },
  };

  return (
    <div
      className={classNames(
        styles.container.base,
        styles.container.variant[variant],
        styles.container.mobileLast[isMobileLast ? "true" : "false"],
      )}
    >
      <div className={classNames(styles.body.base, styles.body.variant[variant])}>
        <div className={classNames(styles.inner.base, styles.inner.variant[variant])}>
          <div className="w-11 aspect-square flex items-center justify-center text-2xl rounded-sm bg-bg-primary">
            <Image
              {...iconImage}
              classNameImg={classNames(styles.icon.base, styles.icon.variant[variant])}
            />
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
          <div className="text-sm/normal text-text-tertiary">{children}</div>
        </div>

        {variant === "logo" && (
          <div
            className="flex items-center justify-center h-full max-lg:w-full lg:max-h-54 max-lg:min-h-45 lg:aspect-square p-4 rounded-xs"
            style={{ backgroundColor: mainLogoBackground }}
          >
            <Image {...mainLogo} classNameImg="w-23 aspect-square" />
          </div>
        )}

        {variant === "image" && (
          <div className="relative h-full w-full max-lg:min-h-45">
            <Image
              {...appImage}
              classNameImg="absolute inset-0 w-full h-full object-cover rounded-xs"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicesItem;
