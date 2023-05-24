interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export default function Container({ children, className }: Props): JSX.Element {
  return <section className={className}>{children}</section>;
}
