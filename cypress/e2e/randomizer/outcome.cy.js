describe("outcome selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has multiple outcomes available", () => {
      cy.get("#multiselect-add-heroes").click();
      cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();
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
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();

    cy.get(":nth-child(2) > .hero-overview").contains("No aura, status or outcome");

    cy.get(":nth-child(2) > .hero-overview").click();
    cy.get("#multiselect-select-outcome").click();
    cy.get("ul#multiselect-select-outcome-multiselect-options li").first().click();
    cy.get("#base-modal-close").click();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Outcome: A courier's job");

    cy.get(":nth-child(2) > .hero-overview").click();
    cy.get("#multiselect-select-outcome").click();
    cy.get("ul#multiselect-select-outcome-multiselect-options li").first().next().click();
    cy.get("#base-modal-close").click();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Outcome: A courier's job, A hideous act");

    cy.get(":nth-child(2) > .hero-overview").click();
    cy.get(".multiselect-tag-remove-icon").first().click();
    cy.get("#base-modal-close").click();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Outcome: A hideous act");

    cy.reload();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Outcome: A hideous act");

    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
});
