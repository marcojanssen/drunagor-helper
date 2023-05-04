describe("export campaign", () => {
  beforeEach(() => {
    cy.visit("./campaign");
  }),
    it("can export campaign", () => {
      cy.get("#campaign-new").click();
      cy.get("#campaign-core").click();

      cy.get("#campaign-add-hero").click();
      cy.get("div#campaign-add-heroes div").first().click();
      cy.get(".hero-detail-btn").click();

      cy.get(".hero-weapon-wrapper .hero-item").click();
      cy.get(".hero-weapon-wrapper li").first().click();
      cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Amiran Crossbow");

      cy.get(".hero-armor-wrapper .hero-item").click();
      cy.get(".hero-armor-wrapper li").first().click();
      cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Breastplate");

      cy.go("back");
      cy.get("#campaign-export").click();

      cy.get("#campaign-token").should(
        "have.value",
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImFtaXJhbi1jcm9zc2JvdyIsIm9mZkhhbmRJZCI6IiIsImFybW9ySWQiOiJicmVhc3RwbGF0ZSIsInRyaW5rZXRJZCI6IiIsImJhZ09uZUlkIjoiIiwiYmFnVHdvSWQiOiIifSwic3Rhc2hlZENhcmRJZHMiOltdLCJza2lsbElkcyI6W10sImF1cmFJZCI6bnVsbCwib3V0Y29tZUlkcyI6W10sInN0YXR1c0lkcyI6W119XX0="
      );
      cy.get("#close-modal").click();

      cy.get(".hero-detail-btn").click();

      cy.get("div.skill-container #dungeon-role-1").check();
      cy.get("div.skill-container #dungeon-role-1").should("be.checked").and("have.value", "dungeon-role-1");

      cy.go("back");

      cy.get("#campaign-export").click();
      cy.get("#campaign-token").should(
        "include.value",
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImFtaXJhbi1jcm9zc2JvdyIsIm9mZkhhbmRJZCI6IiIsImFybW9ySWQiOiJicmVhc3RwbGF0ZSIsInRyaW5rZXRJZCI6IiIsImJhZ09uZUlkIjoiIiwiYmFnVHdvSWQiOiIifSwic3Rhc2hlZENhcmRJZHMiOltdLCJza2lsbElkcyI6WyJkdW5nZW9uLXJvbGUtMSJdLCJhdXJhSWQiOm51bGwsIm91dGNvbWVJZHMiOltdLCJzdGF0dXNJZHMiOltdfV19"
      );
    });
});
