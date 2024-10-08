import { Meta } from "~/types/meta";
import { Image } from "~/types/images";

export interface IIndexLoader {
  items: Image[];
  endCursor: number;
  hasNextPage: boolean;
  metaData: Meta;
}
