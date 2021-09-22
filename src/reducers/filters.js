// const initialState = {
//   SHOW_ALL: true,
//   SHOW_ACTIVE: false,
//   SHOW_COMPLATE: false,
// };

// export const filterTypes = {
//   ALL: 'SHOW_ALL',
//   ACTIVE: 'SHOW_ACTIVE',
//   COMPLATE: 'SHOW_COMPLATE',
// };

// const CHANGE = 'filters/change';

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case CHANGE:
//       return {
//         SHOW_ALL: false,
//         SHOW_ACTIVE: false,
//         SHOW_COMPLATE: false,
//         [action.payload]: true,
//       };
//     default:
//       return state;
//   }
// }

// export const filterChange = payload => ({ type: CHANGE, payload });
