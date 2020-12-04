import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IconTextProps {
  icon: IconProp;
  label: string;
}

const IconText = ({ icon, label }: IconTextProps) => (
  <>
    <FontAwesomeIcon icon={icon} />
    <span className="pl-2">{label}</span>
  </>
);

export default IconText;
