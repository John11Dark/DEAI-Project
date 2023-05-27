interface Props extends React.HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export default function Main({ children, className }: Props): JSX.Element {
  return <main className={`main | ${className}`}>{children}</main>;
}
