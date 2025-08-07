import classNames from "classnames";
import Icon from "@UI/Icon/Icon";
import CheckCircle from "@material-symbols/svg-400/outlined/check_circle.svg?react";

interface ListProps {
  isColumns?: boolean;
  children: React.ReactNode;
}

const List = ({ isColumns = false, children }: ListProps) => {
  const styles = {
    columns: {
      true: "grid md:grid-cols-2 gap-5",
      false: "space-y-5",
    },
  };

  return <ul className={classNames(styles.columns[isColumns ? "true" : "false"])}>{children}</ul>;
};

interface ItemProps {
  isIcon?: boolean;
  children: React.ReactNode;
}

const Item = ({ isIcon = false, children }: ItemProps) => {
  return (
    <li className="flex items-center gap-x-3 text-sm/relaxed">
      {isIcon && (
        <div className="flex text-2xl">
          <Icon Icon={CheckCircle} />
        </div>
      )}

      {children}
    </li>
  );
};

List.Item = Item;
export default List;
