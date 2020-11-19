import queryString from "query-string";

export default function urlParse(url) {
  return queryString.parse(url);
}
