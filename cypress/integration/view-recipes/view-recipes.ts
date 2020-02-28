import {When, Then} from 'cypress-cucumber-preprocessor/steps';
import {RecipesPage} from '../../support/pages';

When(/^I view recipes$/, () => {
  RecipesPage.navigate();
});

Then(/^I should see a list of recipes$/, () => {
  RecipesPage.getRecipes().should('have.length.greaterThan', 0);
});
