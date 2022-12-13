import { Idea } from "../../Data/Idea";
import { SELECTED_IDEA, FILTERED_IDEA } from "../actions/idea.action";

const initialState = {
  ideas: Idea,
  filteredIdea: [],
  selected: null,
};

const IdeaReducer = (state = initialState, action) => {
  console.log("action:" + action)
  switch (action.type) {
    case SELECTED_IDEA:
      return {
        ...state,
        selected: state.ideas.find((Idea) => Idea.id === action.IdeaId),
      };
    case FILTERED_IDEA:
      return {
        ...state,
        filteredIdea: state.ideas.filter(
          (Idea) => Idea.category === action.categoryId
        ),
      };
    default:
      return state;
  }
  
};

export default IdeaReducer;

//selected: state.Ideas.find((Idea) => Idea.id === action.IdeaId),

/*filteredIdea: state.Ideas.filter(
  (Idea) => Idea.category === action.categoryID
  )*/