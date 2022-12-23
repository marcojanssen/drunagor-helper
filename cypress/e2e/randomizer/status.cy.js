describe("status selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has multiple statuses available", () => {
      cy.get("#multiselect-add-heroes").click();
      cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();
      cy.get(".hero-overview").click();

      cy.get("ul#multiselect-select-status-multiselect-options li").should("have.length", 66);
      cy.get("ul#multiselect-select-status-multiselect-options li")
        .first()
        .should("have.text", "A cooperative approach")
        .next()
        .should("have.text", "A friendly approach")
        .next()
        .should("have.text", "Aggressive approach")
        .next()
        .should("have.text", "A man's best friend")
        .next()
        .should("have.text", "A mysterious click");
    });
  it("can set, remove, stores and reset status", () => {
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();

    cy.get(":nth-child(2) > .hero-overview").contains("No aura, status or outcome");

    cy.get(":nth-child(2) > .hero-overview").click();
    cy.get("#multiselect-select-status").click();
    cy.get("ul#multiselect-select-status-multiselect-options li").first().click();
    cy.get("#base-modal-close").click();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Status: A cooperative approach");

    cy.get(":nth-child(2) > .hero-overview").click();
    cy.get("#multiselect-select-status").click();
    cy.get("ul#multiselect-select-status-multiselect-options li").first().next().click();
    cy.get("#base-modal-close").click();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Status: A cooperative approach, Aggressive approach");

    cy.get(":nth-child(2) > .hero-overview").click();
    cy.get('[aria-label="A cooperative approach ❎"] > .multiselect-tag-remove > .multiselect-tag-remove-icon').click();
    cy.get("#base-modal-close").click();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Status: Aggressive approach");

    cy.reload();

    cy.get(":nth-child(2) > .hero-overview").first().contains("Status: Aggressive approach");

    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
});
