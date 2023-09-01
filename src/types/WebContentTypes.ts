export type CustomStyle = {
  bgColor: string;
  color: string;
  bgImgUrl?: string;
  bgVideoUrl?: string;
  waveColor?: string;
};

export type Config = {
  CustomStyle?: CustomStyle;
  show: boolean;
};

export type Header = GenericContent & { Cta: Cta };

export type Cta = {
  text: string;
  linkUrl: string;
};

// export type GenericContent = {
//   title?: string;
//   subTitle?: string;
//   text?: string;
// };

// export type ListItem = GenericContent & {
//   order: number;
//   imgUrl: string;
//   linkUrl: string;
// };

// export type HtmlSnippet = {
//   html: string;
// };

export type ImageItem = {
  imgUrl: string;
  linkUrl?: string;
  caption?: string;
};
export type VideoItem = {
  videoUrl?: string;
  videoHtml?: string;
  linkUrl?: string;
};

export type VideoListItem = Omit<GenericContent, "subTitle"> & {
  Video: VideoItem;
};

// export type ColumnContent = GenericContent & {
//   type?: string; // snippet, img, content
//   Cta?: Cta;
//   List?: ListItem[];
//   Image?: Image;
//   HtmlSnippet?: HtmlSnippet;
// };

// export type WebContentItem = GenericContent & {
//   order?: number;
//   component: string;
//   Config: Config;
//   // ColumnsList: ColumnContent[];
// };

export type WebSite = {
  WebSection: WebSection;
  WebConfig: WebConfig;
};

type WebSectionKeys =
  | "Home"
  | "Nosotros"
  | "Procesos"
  | "Certificaciones"
  | "MisionValores"
  | "Contacto";

export type WebSection = {
  [key in WebSectionKeys]: WebContentItem[];
};

export type WebContentItem = {
  order?: number;
  // Content: SectionItem | ImgStrip[] | HtmlSnippet;
  Content?: ContentItem;
  Header?: Header;
  ImageList?: ImgList;
  HtmlSnippet?: HtmlSnippet;
  component: string;
  Config: Config;
  // ColumnsList: ColumnContent[];
};

export type ContentItem = GenericContent & {
  Columns: ColumnContent[];
};

export type ImgList = Omit<GenericContent, "subTitle" | "text"> & {
  List: ImageItem[];
  // imgUrl: string;
  // imgLink?: string;
};

export type HtmlSnippet = {
  htmlContent: string;
};

export type ColumnContent = {
  TextList?: ListItem[];
  VideoList?: VideoListItem[];
  Image?: ImageItem;
  Content?: GenericContent;
  Cta?: Cta;
  CustomStyle?: CustomStyle;
};

// Menu types
export type MenuItem = {
  text: string;
  order: number;
  show: boolean;
  linkUrl: string;
};

export type LogoItem = {
  title?: string;
  caption?: string;
  Image?: ImageItem;
};

type LogoTypes = "LogoColor" | "LogoInverted";

export type LogoType = {
  [key in LogoTypes]: ImageItem;
};
// General types
export type WebConfig = {
  LogoList: LogoType;
  WebMenu: MenuItem[];
  WebFooter: FooterColumn[];
  // HeaderContent: GenericContent & Cta;
};

export type FooterColumn = {
  title: string;
  Content?: Omit<GenericContent, "title" | "text">;
  TextList?: ListItem[];
  ImageList?: ImgList;
  HtmlSnippet?: HtmlSnippet;
};

export type GenericContent = {
  title?: string;
  subTitle?: string;
  text?: string;
};
// @ts-ignore

// export type ColumnContent = (
//   | { List: ListItem[] }
//   | ImageItem[]
//   | GenericContent
// ) & { caca: string };

export type ListItem = GenericContent & {
  muiIcon?: string;
  Image?: ImageItem;
  linkUrl?: string;
};

/*Component types*/
