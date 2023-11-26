import { HTMLAttributes } from "react";
import { PropsWithChildren } from "react";

export function Section({
  children,
  ...rest
}: PropsWithChildren & HTMLAttributes<HTMLElement>) {
  return <section {...rest}>{children}</section>;
}
