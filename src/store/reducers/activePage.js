import * as types from "../action-types";

import reviewLogo from '../../assets/review.svg'
import authorLogo from '../../assets/author.svg'
import publicationsLogo from '../../assets/publications.svg'
import citationLogo from '../../assets/citation.svg'
import journalsLogo from '../../assets/journals.svg'
import kvartilsLogo from '../../assets/kvartils.svg'
import knowledgesLogo from '../../assets/knowledges.svg'
import affiliaciLogo from '../../assets/affiliaci.svg'
import collectivesLogo from '../../assets/collectives.svg'
import subcollectivesLogo from '../../assets/subcollectives.svg'

const initState = {
   page: 'scopus',
   pages: [
      {
         icon: reviewLogo,
         title: 'Обзор'
      },
      {
         icon: authorLogo,
         title: 'Авторы'
      },
      {
         icon: publicationsLogo,
         title: 'Публикации'
      },
      {
         icon: citationLogo,
         title: 'Цитирования'
      },
      {
         icon: journalsLogo,
         title: 'Журналы'
      },
      {
         icon: kvartilsLogo,
         title: 'Квартили'
      },
      {
         icon: knowledgesLogo,
         title: 'Области знаний'
      },
      {
         icon: affiliaciLogo,
         title: 'Аффилиации'
      },
      {
         icon: collectivesLogo,
         title: 'Коллективы'
      },
      {
         icon: subcollectivesLogo,
         title: 'Подразделения'
      }
   ],
};
export default function activePage(state = initState, action) {
   switch (action.type) {
      case types.PAGES_CHANGE_ACTIVE:
         return {
            page: action.page,
            pages: action.pages
         }
      default:
         return state;
   }
}