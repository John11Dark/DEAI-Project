type ErrorMessageProps = {
  message: string;
  className?: string;
};

export default function ErrorMessage(props: ErrorMessageProps) {
  return <p className="error-message-text">{props.message}</p>;
}
