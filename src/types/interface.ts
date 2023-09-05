export interface IIcon {
  name: string;
  width: number;
}

export interface IGradient {
  from: string;
  to: string;
}

export type TLinks = {
  _id: string;
  icon: IIcon;
  gradient: IGradient;
  link: Array<string>;
  title: string;
  about_application?: Array<string>;
  technical_task?: Array<string>;
};

export interface IPropsHome {
  links: TLinks[];
  me: TMeData;
}

export type TMeData = {
  siteName: string;
  avatar: string;
  description: string;
};
