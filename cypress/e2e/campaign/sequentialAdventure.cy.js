describe("sequential adventure", () => {
  beforeEach(() => {
    cy.visit("./campaign");
    cy.get("#campaign-new").click();
    cy.get("#campaign-core").click();

    cy.get("#campaign-add-hero").click();
    cy.get("div#campaign-add-heroes div").first().click();
  }),
    it("can add sequential adventure", () => {
      cy.get("#runes").should("not.exist");
      cy.get("#sequential-adventure-btn").click();

      cy.get("#runes").clear();
      cy.get("#runes").type("15");
      cy.get("#seq-adv").click();
      cy.get("#curse-cubes").select("4");
      cy.get("#shield").select("2");
      cy.get("#save-seq-adv").click();

      cy.get("#runes").should("have.value", "15");
      cy.get("#curse-cubes span").first().should("have.text", "4");
      cy.get("#trauma-cubes span").first().should("have.text", "0");
      cy.get("#resources").should("have.text", "2 Shield");

      cy.reload();

      cy.get("#runes").should("have.value", "15");
      cy.get("#curse-cubes span").first().should("have.text", "4");
      cy.get("#trauma-cubes span").first().should("have.text", "0");
      cy.get("#resources").should("have.text", "2 Shield");
    });
  it("will clear sequential adventure on camp phase", () => {
    cy.get("#runes").should("not.exist");
    cy.get("#sequential-adventure-btn").click();

    cy.get("#runes").clear();
    cy.get("#runes").type("15");
    cy.get("#runes").should("have.value", "15");

    cy.get("#camp-phase").click();
    cy.get("#confirm-camp-phase").click();

    cy.get("#runes").should("not.exist");
    cy.get("#curse-cubes").should("not.exist");
    cy.get("#trauma-cubes").should("not.exist");
    cy.get("#resources").should("not.exist");
  });
});
