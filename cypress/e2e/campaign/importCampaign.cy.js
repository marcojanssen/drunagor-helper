describe("import campaign", () => {
  beforeEach(() => {
    cy.visit("./campaign");
  }),
    it("can import campaign", () => {
      cy.get("#campaign-import").click();
      cy.get("#campaign-import-modal #campaign-token").type(
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImFtaXJhbi1jcm9zc2JvdyIsIm9mZkhhbmRJZCI6IiIsImFybW9ySWQiOiJicmVhc3RwbGF0ZSIsInRyaW5rZXRJZCI6IiIsImJhZ09uZUlkIjoiIiwiYmFnVHdvSWQiOiIifSwic3Rhc2hlZENhcmRJZHMiOltdLCJza2lsbElkcyI6W10sImF1cmFJZCI6bnVsbCwib3V0Y29tZUlkcyI6W10sInN0YXR1c0lkcyI6W119XX0="
      );
      cy.get("#campaign-import-modal #import-button").click();

      cy.get("#heroes").contains("Arkhanos");
      cy.get(".hero-detail-btn").click();
      cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Crossbow");
      cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Breastplate");
    });
});
