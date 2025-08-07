import classNames from "classnames";
import AnimatedText from "@UI/AnimatedText/AnimatedText";

interface SectionHeaderProps {
  title: string;
  titleSize?: "lg" | "md" | "sm";
  subtitle?: string;
  align?: "center" | "left";
  isMarginBottom?: boolean;
  isAnimated?: boolean;
  scrollTriggerId?: string;
}

const SectionHeader = ({
  title,
  titleSize = "md",
  subtitle,
  align = "center",
  isMarginBottom = true,
  isAnimated = true,
  scrollTriggerId,
}: SectionHeaderProps) => {
  const styles = {
    container: {
      base: "flex flex-col gap-y-8 max-md:gap-y-4 w-full max-w-160",
      align: {
        left: "",
        center: "text-center items-center mx-auto",
      },
      marginBottom: {
        true: "mb-12 max-md:mb-7",
        false: "",
      },
    },
    title: {
      lg: "heading-lg",
      md: "heading-md",
      sm: "heading-sm",
    },
  };

  return (
    <div
      className={classNames(
        styles.container.base,
        styles.container.align[align],
        styles.container.marginBottom[isMarginBottom ? "true" : "false"],
      )}
    >
      <h2 className={styles.title[titleSize]}>
        {isAnimated ? <AnimatedText scrollTriggerId={scrollTriggerId} text={title} /> : title}
      </h2>

      {subtitle && (
        <div className="leading-normal text-text-tertiary max-md:max-w-110">
          {isAnimated ? (
            <AnimatedText
              scrollTriggerId={scrollTriggerId}
              variant="lines"
              text={subtitle}
              startOffsetTop={-10}
            />
          ) : (
            subtitle
          )}
        </div>
      )}
    </div>
  );
};
export default SectionHeader;
