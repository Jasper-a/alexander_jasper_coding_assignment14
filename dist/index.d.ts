import { MouseEventHandler, FC } from 'react';

interface ButtonProps {
    text?: string;
    disabled?: boolean;
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

interface CardProps {
    title?: string;
    text?: string;
    disabled?: boolean;
    backgroundColor?: string;
    src?: string;
    imgWidth?: string;
}

declare const Card: FC<CardProps>;

interface DropdownProps {
    disabled?: boolean;
    backgroundColor?: string;
    option1?: string;
    option2?: string;
    option3?: string;
}

declare const Dropdown: FC<DropdownProps>;

interface HeroCardProps {
    title?: string;
    text?: string;
    disabled?: boolean;
    src?: string;
}

declare const HeroCard: FC<HeroCardProps>;

interface ImgProps {
    src?: string;
    disabled?: boolean;
    backgroundColor?: string;
    width?: string;
    opacity?: number;
}

declare const Img: FC<ImgProps>;

interface LabelProps {
    text?: string;
    disabled?: boolean;
    backgroundColor?: string;
}

declare const Label: FC<LabelProps>;

interface RadioButtonProps {
    disabled?: boolean;
    backgroundColor?: string;
    option?: string;
}

declare const RadioButton: FC<RadioButtonProps>;

interface TableProps {
    disabled?: boolean;
    backgroundColor?: string;
    header1?: string;
    header2?: string;
    header3?: string;
    cell11?: string;
    cell12?: string;
    cell13?: string;
    cell21?: string;
    cell22?: string;
    cell23?: string;
    cell31?: string;
    cell32?: string;
    cell33?: string;
    footer1?: string;
    footer2?: string;
    footer3?: string;
}

declare const Table: FC<TableProps>;

interface TextProps {
    text?: string;
    disabled?: boolean;
    backgroundColor?: string;
    display?: string;
    size?: string;
}

declare const Text: FC<TextProps>;

interface BasicInformationProps {
    backgroundColor?: string;
    fontFamily?: string;
}

declare const BasicInformation: FC<BasicInformationProps>;

interface WorkProps {
    backgroundColor?: string;
    fontFamily?: string;
}

declare const Work: FC<WorkProps>;

interface SkillsProps {
    backgroundColor?: string;
    fontFamily?: string;
}

declare const Skills: FC<SkillsProps>;

interface ResourcesProps {
    backgroundColor?: string;
    fontFamily?: string;
}

declare const Resources: FC<ResourcesProps>;

interface DeveloperSetupProps {
    backgroundColor?: string;
    fontFamily?: string;
}

declare const DeveloperSetup: FC<DeveloperSetupProps>;

export { BasicInformation, Button, Card, DeveloperSetup, Dropdown, HeroCard, Img, Label, RadioButton, Resources, Skills, Table, Text, Work };
