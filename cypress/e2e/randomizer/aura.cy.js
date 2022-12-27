describe("aura selection", () => {
  beforeEach(() => {
    cy.visit("./party");
  }),
    it("has multiple auras available", () => {
      cy.get("#multiselect-add-heroes").click();
      cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();
      cy.get(".hero-overview").click();

      cy.get("ul#multiselect-select-aura-multiselect-options li").should("have.length", 21);
      cy.get("ul#multiselect-select-aura-multiselect-options li")
        .first()
        .should("have.text", "Blessing of good fortune")
        .next()
        .should("have.text", "Blessing of the guardian")
        .next()
        .should("have.text", "Bloodlust")
        .next()
        .should("have.text", "Bonding")
        .next()
        .should("have.text", "Boon of empathy");
    });
  it("can set and remove aura", () => {
    cy.get("#multiselect-add-heroes").click();
    cy.get("ul#multiselect-add-heroes-multiselect-options li").first().click();

    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.get(".hero-overview").click();
    cy.get("#multiselect-select-aura").click();
    cy.get("ul#multiselect-select-aura-multiselect-options li").first().click();
    cy.get("#base-modal-close").click();

    cy.get(".hero-overview").contains("Aura: Blessing of good fortune");

    cy.get(".hero-overview").click();
    cy.get("#multiselect-select-aura").click();
    cy.get("ul#multiselect-select-aura-multiselect-options li").first().next().click();
    cy.get("#base-modal-close").click();

    cy.get(".hero-overview").contains("Aura: Blessing of the guardian");
    cy.reload();
    cy.get(".hero-overview").contains("Aura: Blessing of the guardian");

    cy.get(".hero-overview").click();
    cy.get(".multiselect-clear").click();
    cy.get("#base-modal-close").click();

    cy.get(".hero-overview").contains("No aura, status or outcome");
    cy.reload();
    cy.get(".hero-overview").contains("No aura, status or outcome");

    cy.clearLocalStorage();
    cy.get(".hero-image").should("not.exist");
  });
});
