import { ReactNode } from 'react';
import { BG_COLOR_MAIN, TEXT_COLOR_MAIN } from '../configs/configs';

const defaultColors = `bg-[${BG_COLOR_MAIN}] text-[${TEXT_COLOR_MAIN}]`;

const DividerLine = () => <p className={`${defaultColors} text-center divide-y m-0 p-0`}>...</p>;

interface SectionProps {
  children: ReactNode;
  isFirstSection?: boolean;
}

const Section = ({ children, isFirstSection }: SectionProps) => {
  return (
    <>
      {isFirstSection ? null : <DividerLine />}
      <section className={defaultColors}>{children}</section>
    </>
  );
};
export { Section };
