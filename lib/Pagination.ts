import { FieldPolicy } from "@apollo/client";
import { PostListType } from "./types";

export const Pagination = (keyArgs?: any): FieldPolicy => {
  if (keyArgs === void 0) {
    keyArgs = false;
  }
  return {
    keyArgs: keyArgs,
    merge: (
      existing: PostListType,
      incoming: PostListType,
      _a: any
    ): PostListType => {
      const args: { page: number; limit: number } = _a.args;

      const merged = existing ? existing.data.slice(0) : [];

      if (args) {
        var _b = args.limit * args.page;

        var offset = _b === void 0 ? 0 : _b;

        for (var i = 0; i < incoming.data.length; ++i) {
          merged[offset + i] = incoming.data[i];
        }
      } else {
        merged.push.apply(merged, incoming);
      }

      return {
        ...incoming,
        data: merged,
      };
    },
  };
};
