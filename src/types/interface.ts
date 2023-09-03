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
  link: string;
  title: string;
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
