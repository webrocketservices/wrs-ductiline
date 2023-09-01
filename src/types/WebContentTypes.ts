export type CustomStyle = {
  bgColor: string;
  color: string;
  bgImgUrl?: string;
  bgVideoUrl?: string;
  waveColor?: string;
  textAlign?: string;
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

export type ImageItem = {
  imgUrl: string;
  linkUrl?: string;
  caption?: string;
  cols?: number; //TODO: remove
};

export type VideoItem = {
  videoUrl?: string;
  videoHtml?: string;
  linkUrl?: string;
};

export type VideoListItem = Omit<GenericContent, "subTitle"> & {
  Video: VideoItem;
};

export type WebSite = {
  WebSection: WebSection;
  WebConfig: WebConfig;
};

type WebSectionKeys =
  | "Home"
  | "Nosotros"
  | "Piezas"
  | "Certificaciones"
  | "MisionValores"
  | "Contacto";

export type WebSection = {
  [key in WebSectionKeys]: WebContentItem[];
};

export type WebContentItem = {
  order?: number;
  Content?: ContentItem;
  Header?: Header;
  ImageList?: ImgList;
  HtmlSnippet?: HtmlSnippet;
  component: string;
  Config: Config;
};

export type ContentItem = GenericContent & {
  Columns: ColumnContent[];
};

export type ImgList = Omit<GenericContent, "subTitle" | "text"> & {
  List: ImageItem[];
};

export type HtmlSnippet = {
  htmlContent: string;
};

type ContactFormFieldTypes = "name" | "phone" | "company" | "comments";

export type ContactFormField = {
  [key in ContactFormFieldTypes]: string;
};

export type ContactForm = ContactFormField & {
  buttonText: string;
  buttonColor: string;
  apiUrl: string;
};

export type ColumnContent = {
  TextList?: ListItem[];
  VideoList?: VideoListItem[];
  ImageList?: ImgList[];
  Image?: ImageItem;
  ContactForm?: ContactForm;
  Content?: GenericContent;
  HtmlSnippet?: HtmlSnippet;
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

export type ListItem = GenericContent & {
  muiIcon?: string;
  Image?: ImageItem;
  linkUrl?: string;
};
