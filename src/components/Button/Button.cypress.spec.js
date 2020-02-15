describe('Storybook test', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.wait(2000);
    })

    it('click on button first time', () => {
        cy.get('#storybook-preview-iframe').then(($iframe) => {
            const doc = $iframe.contents();
            iget(doc, "button").click();
        })
    })

    it('check is text visible', () => {
        cy.get('#storybook-preview-iframe').then(($iframe) => {
            const doc = $iframe.contents();
            iget(doc, "button").click().then(() => cy.get('span'));
        })
    })
})

const iget = (doc, selector) => {
    return cy.wrap(doc.find(selector));
}
