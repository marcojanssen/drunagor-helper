describe("aura selection", () => {
  beforeEach(() => {
    cy.visit("./keyword");
  }),
    it("has keywords available", () => {
      cy.get("#keyword-list div").should("have.length.above", 100);
      cy.get("#keyword-list div")
        .first()
        .should("have.text", "+X or -X DMG")
        .next()
        .should("have.text", "+X or -X HIT")
        .next()
        .should("have.text", "+X MOVEMENT")
        .next()
        .should("have.text", "ACTION CUBES (AC)")
        .next()
        .should("have.text", "ADJ OR ADJACENT");
    });
  it("can search for a keyword", () => {
    cy.get("#keyword-search input").type("Status");

    cy.get("#keyword-list div").should("have.length", 1);
    cy.get("#keyword-list div").contains("STATUS");

    cy.get("#keyword-search input").clear();
    cy.get("#keyword-list div").should("have.length.above", 100);

    cy.get("#keyword-search input").type("trap");
    cy.get("#keyword-list div").should("have.length", 4);
    cy.get("#keyword-list div").contains("POISON TRAP");
  });
});
