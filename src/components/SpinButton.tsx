import Button, { ButtonProps } from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export interface SpinButtonProps {
  spin?: boolean;
  text: string;
}

const SpinButton = ({ spin, text, ...rest }: SpinButtonProps & ButtonProps) => (
  <Button disabled={spin} {...rest}>
    {spin && <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />}
    <span className={spin ? "pl-2" : ""}>{text}</span>
  </Button>
);

export default SpinButton;
