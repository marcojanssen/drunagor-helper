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
      cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Dreampiercer Bow");

      cy.get(".hero-armor-wrapper .hero-item").click();
      cy.get(".hero-armor-wrapper li").first().click();
      cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Cloth Armor");

      cy.go("back");
      cy.get("#campaign-export").click();

      cy.get("#campaign-token").should(
        "have.value",
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImRyZWFtcGllcmNlci1ib3ciLCJvZmZIYW5kSWQiOiIiLCJhcm1vcklkIjoiY2xvdGgtYXJtb3IiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOltdLCJhdXJhSWQiOm51bGwsIm91dGNvbWVJZHMiOltdLCJzdGF0dXNJZHMiOltdfV19"
      );
      cy.get("#close-modal").click();

      cy.get(".hero-detail-btn").click();

      cy.get("div.skill-container #dungeon-role-1").check();
      cy.get("div.skill-container #dungeon-role-1").should("be.checked").and("have.value", "dungeon-role-1");

      cy.go("back");

      cy.get("#campaign-export").click();
      cy.get("#campaign-token").should(
        "include.value",
        "eyJjYW1wYWlnbiI6ImNvcmUiLCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImRyZWFtcGllcmNlci1ib3ciLCJvZmZIYW5kSWQiOiIiLCJhcm1vcklkIjoiY2xvdGgtYXJtb3IiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOlsiZHVuZ2Vvbi1yb2xlLTEiXSwiYXVyYUlkIjpudWxsLCJvdXRjb21lSWRzIjpbXSwic3RhdHVzSWRzIjpbXX1dfQ=="
      );
    });
});
