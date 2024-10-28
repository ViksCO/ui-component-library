import { mount } from '@cypress/vue';
import ButtonDoc from '../../../../demos/src/button/ButtonDoc.vue';

describe('Button', () => {
  it(`test case for all button variants, states and sizes`, () => {
    mount(ButtonDoc as any);

    cy.matchImageSnapshot(`button-all-variants`);
  });
});
