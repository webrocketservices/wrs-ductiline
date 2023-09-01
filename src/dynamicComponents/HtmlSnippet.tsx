import parse from "html-react-parser";
import { HtmlSnippet } from "../types";

type CompProps = {
  data: HtmlSnippet;
};
export default function ImageList({ data }: CompProps) {
  return parse(data.htmlContent);
}
