import * as types from "../action-types";

export const changeActivePage = (page, pages) => {
   return {
      type: types.PAGES_CHANGE_ACTIVE,
      page: page,
      pages: pages
   };
};