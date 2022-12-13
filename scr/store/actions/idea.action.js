export const SELECTED_IDEA = "SELEC_IDEA";
export const FILTERED_IDEA = "FILTERED_IDEA";

export const selectIdea = (id) => ({
  type: SELECTED_IDEA,
  IdeaId: id,
});

export const filteredIdea = (id) => ({
  type: FILTERED_IDEA,
  categoryId: id,
});
