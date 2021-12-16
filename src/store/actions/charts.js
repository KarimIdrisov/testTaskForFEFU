import * as types from "../action-types";

export const changePublicationsType = (type) => {
   return {
      type: types.CHARTS_CHANGE_PUBLICATIONS_TYPE,
      selectorType: type
   };
};

export const changeCitationsType = (type) => {
   return {
      type: types.CHARTS_CHANGE_CITATIONS_TYPE,
      selectorType: type
   };
};

export const changeData = () => {
   return {
      type: types.CHARTS_CHANGE_DATA,
   };
};
