import * as types from "../action-types";

const initState = {
   publications_type: 'workers', // workers || wage
   citation_type: 'workers', // workers || wage
   range: [2014, 2020],
   source: 'scopus',
   time: '16.12.2021',
   typeOfPublication: ['Article'],
   index: ['SCPS'],
   quartile: [1, 2, 3, 4],
   school: ['ШЕН'],
   change: false
};
export default function charts(state = initState, action) {
   switch (action.type) {
      case types.CHARTS_CHANGE_PUBLICATIONS_TYPE:
         return {
            ...state,
            publications_type: action.selectorType
         }
      case types.CHARTS_CHANGE_CITATIONS_TYPE:
         return {
            ...state,
            citation_type: action.selectorType
         }
      case types.CHARTS_CHANGE_DATA:
         return {
            ...state,
            change: !state.change
         }
      default:
         return state;
   }
}