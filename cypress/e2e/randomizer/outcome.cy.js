describe("outcome selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has multiple outcomes available", () => {
      cy.get("#party-add-hero").click();
      cy.get("div#party-add-heroes div").first().click();
      cy.get(".hero-overview").click();

      cy.get("ul#multiselect-select-outcome-multiselect-options li").should("have.length", 15);
      cy.get("ul#multiselect-select-outcome-multiselect-options li")
        .first()
        .should("have.text", "A courier's job")
        .next()
        .should("have.text", "Adamant")
        .next()
        .should("have.text", "A hideous act")
        .next()
        .should("have.text", "A lover's request")
        .next()
        .should("have.text", "Corrupted hero");
    });
  it("can set, remove, stores and reset outcome", () => {
    cy.get("#party-add-hero").click();
    cy.get("div#party-add-heroes div").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#multiselect-select-outcome").click();
    cy.get("ul#multiselect-select-outcome-multiselect-options li").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: A courier's job");

    cy.get(".hero-overview").click();
    cy.get("#multiselect-select-outcome").click();
    cy.get("ul#multiselect-select-outcome-multiselect-options li").first().next().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: A courier's job, A hideous act");

    cy.get(".hero-overview").click();
    cy.get(".multiselect-tag-remove-icon").first().click();
    cy.get("#close-modal").click();

    cy.get(".hero-overview").contains("Outcome: A hideous act");

    cy.reload();

    cy.get(".hero-overview").contains("Outcome: A hideous act");

    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
});
