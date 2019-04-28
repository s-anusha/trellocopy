import { CONSTANTS } from "../actions";

let listID = 2;
let cardID = 4;

const initialState = [
  {
    title: "Title #1",
    id: `list-${0}`,
    cards: [
      {
        id:`card-${0}`,
        text: "Item #11"
      },
      {
        id: `card-${1}`,
        text: "Item #12"
      }
    ]
  },
  {
    title: "Title #2",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "Item #21"
      },
      {
        id: `card-${3}`,
        text: "Item #22"
      }
    ]
  }
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`
      };
      listID += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`
      };
      cardID += 1;

      console.log("action received", action);

      const newState = state.map(list => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId
      } = action.payload;
      
      const newState = [...state];
      
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find(list => droppableIdStart === list.id);
	const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      if (droppableIdStart !== droppableIdEnd) {
      const listStart = state.find(list => droppableIdStart === list.id);
      const card = listStart.cards.splice(droppableIndexStart, 1);
      const listEnd = state.find(list => droppableIdEnd === list.id);
      listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    case CONSTANTS.EDIT_CARD: {
      const { id, listID, newText } = action.payload;
      return state.map(list => {
        if (list.id === listID) {
          const newCards = list.cards.map(card => {
            if (card.id === id) {
              card.text = newText;
              return card;
            }
            return card;
          });
          return { ...list, cards: newCards };
        }
        return list;
      });
    }

    default:
      return state;
  }
};

export default listReducer
