import { Circle } from "phosphor-react";

interface HelpOptionProps {
  option: string;
}

export function HelpOptions(props: HelpOptionProps) {
  return (
    <>
      <a href="#">{props.option}</a>
      <Circle className="help-separator" height={2} width={2} color={'#c7c7c7'} weight={'fill'} />
    </>
  );
}
