import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "flex h-10 items-center rounded-lg bg-khaki px-4 text-sm font-medium text-davysgray transition-colors hover:bg-davysgray hover:text-khaki focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-davysgray active:bg-davysgray aria-disabled:cursor-not-allowed aria-disabled:opacity-50",
        className
      )}
    >
      {children}
    </button>
  );
}
