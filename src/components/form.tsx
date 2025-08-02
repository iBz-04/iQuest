import { ComponentProps, forwardRef } from "react";
import { IconArrowBack, IconCommand } from "@tabler/icons-react";
import cx from "@/utils/cx";

export interface Props extends ComponentProps<"form"> {
  inputProps: ComponentProps<"input">;
  buttonProps: ComponentProps<"button">;
}

const Form = ({ inputProps, buttonProps, onSubmit }: Props, ref: any) => {
  return (
    <form
      onSubmit={onSubmit}
      className="relative m-auto flex items-center gap-4 justify-center"
      ref={ref}
    >
      <div className="glass-card w-full flex items-center relative">
        <input
          placeholder="buraya yazın..."
          required
          {...inputProps}
          className={cx(
            "transition h-10 md:h-12 pl-4 pr-12 flex-1 rounded-xl",
            "bg-transparent text-gray-200 text-base",
            "focus:outline-none focus:ring-0",
            "disabled:bg-black disabled:text-gray-500",
            inputProps.className,
          )}
          type="text"
        />

        <div className="absolute right-2 flex gap-2 items-center">
          <div className="hidden md:flex items-center gap-1 px-1.5 py-1 text-xs text-gray-500 border border-gray-700 rounded">
            <IconCommand size={14} />
            <span>K</span>
          </div>
          
          <button
            {...buttonProps}
            type="submit"
            tabIndex={-1}
            className={cx(
              "p-1.5 rounded-md text-gray-400 hover:text-gray-200 hover:bg-black transition-all",
            )}
          >
            <IconArrowBack stroke={1.5} />
          </button>
        </div>
      </div>
    </form>
  );
};

export default forwardRef(Form);
