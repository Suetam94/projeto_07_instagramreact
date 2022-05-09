import { Circle } from "phosphor-react";

interface HelpOptionProps {
  option: string;
}

export function HelpOptions(props: HelpOptionProps) {
  return (
    <>
      <a href="#">{props.option}</a>
      <Circle height={2} width={2} color={'#000'} weight={'fill'} />
    </>
  );
}
