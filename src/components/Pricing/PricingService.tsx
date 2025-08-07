import type { CurrencySymbols } from "@shared/types";
import type { HeaderBlock } from "@shared/entities/headerBlock/headerBlock";
import type { ActionButton } from "@shared/entities/actionButton/actionButton";
import { currencySymbols, fromLabel } from "@shared/config";

import SectionHeader from "@UI/SectionHeader/SectionHeader";
import List from "@UI/List/List";
import Icon from "@UI/Icon/Icon";
import ButtonBase from "@UI/ButtonBase/ButtonBase";
import ArrowRightAlt from "@material-symbols/svg-400/outlined/arrow_right_alt.svg?react";

interface PricingServiceProps {
  headerBlock: HeaderBlock;
  actionButton: ActionButton;
  price: number;
  currencySymbol: CurrencySymbols;
  hasFromLabel?: boolean;
  includes: { id: string; value: string }[];
}

const PricingService = ({
  headerBlock,
  actionButton,
  currencySymbol,
  price,
  hasFromLabel = false,
  includes,
}: PricingServiceProps) => {
  return (
    <div className=" px-6 max-md:px-4 pt-10 max-md:pt-8 pb-6 border border-stroke-tertiary not-dark:bg-linear-(--gradient-light-primary) dark:bg-accent-primary rounded-md space-y-10">
      <SectionHeader
        {...headerBlock}
        titleSize="sm"
        isMarginBottom={false}
        isAnimated={false}
        align="left"
      />

      <List isColumns>
        {includes.map(({ id, value }) => (
          <List.Item key={id} isIcon>
            {value}
          </List.Item>
        ))}
      </List>

      <ButtonBase {...actionButton}>
        <div className="flex items-center justify-between gap-x-5 py-7 max-md:py-5 max-xl:py-5 px-10 max-xl:px-6 max-md:px-4 rounded-sm bg-bg-primary group">
          <div className="flex items-end gap-x-4 flex-wrap">
            {hasFromLabel && (
              <div className="text-xl/relaxed max-xl:text-lg/loose max-md:text-base text-text-tertiary">
                {fromLabel}
              </div>
            )}

            <strong className="text-5xl max-xl:text-4xl font-bold">
              {price.toLocaleString()} {currencySymbols[currencySymbol]}
            </strong>
          </div>

          <div className="text-2xl group-hover:translate-x-2 max-md:group-hover:translate-x-1 transition-transform">
            <Icon Icon={ArrowRightAlt} />
          </div>
        </div>
      </ButtonBase>
    </div>
  );
};
export default PricingService;
