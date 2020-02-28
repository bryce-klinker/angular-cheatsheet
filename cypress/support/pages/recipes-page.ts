function navigate() {
  cy.visit('/recipes');
}

function getRecipes() {
  return cy.getByTestId('recipe-list-item');
}

export const RecipesPage = {
  navigate,
  getRecipes
};
