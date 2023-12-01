interface UiButtonProps {
  children: React.ReactNode;
}

export default function UiButton({ children }: UiButtonProps) {
  return <button>{children}</button>;
}
