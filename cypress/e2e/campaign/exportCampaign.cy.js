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
        "eyJjYW1wYWlnbkRhdGEiOnsiY2FtcGFpZ25JZCI6IiIsImNhbXBhaWduIjoiY29yZSIsIm5hbWUiOiIiLCJzdGF0dXNJZHMiOltdLCJvdXRjb21lSWRzIjpbXSwiZm9sbG93ZXJJZHMiOltdLCJ1bmZvbGRpbmdJZHMiOltdLCJiYWNrZ3JvdW5kQW5kVHJhaXRJZHMiOltdLCJsZWdhY3lUcmFpbCI6eyJwZXJzZXZlcmFuY2UiOjAsInRyYWdlZHkiOjAsImRvb20iOjAsImhlcm9pc20iOjB9LCJpc1NlcXVlbnRpYWxBZHZlbnR1cmUiOmZhbHNlLCJzZXF1ZW50aWFsQWR2ZW50dXJlUnVuZXMiOjB9LCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImRyZWFtcGllcmNlci1ib3ciLCJvZmZIYW5kSWQiOiIiLCJhcm1vcklkIjoiY2xvdGgtYXJtb3IiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOltdLCJkdW5nZW9uUm9sZVNraWxsQ3ViZUNvbG9ycyI6eyJyYW5rT25lIjpudWxsLCJyYW5rVHdvIjpudWxsfSwic2VxdWVudGlhbEFkdmVudHVyZVN0YXRlIjpudWxsLCJhdXJhSWQiOm51bGwsIm91dGNvbWVJZHMiOltdLCJzdGF0dXNJZHMiOltdfV19"
      );
      cy.get("#close-modal").click();

      cy.get(".hero-detail-btn").click();

      cy.get("div.skill-container #dungeon-role-1").check();
      cy.get(".yellow").parent().click();
      cy.get("div.skill-container #dungeon-role-1").should("be.checked").and("have.value", "dungeon-role-1");
      cy.get("div.skill-container #dungeon-role-1").parent().should("have.text", "Level 1 (Yellow)");

      cy.go("back");

      cy.get("#campaign-export").click();
      cy.get("#campaign-token").should(
        "include.value",
        "eyJjYW1wYWlnbkRhdGEiOnsiY2FtcGFpZ25JZCI6IiIsImNhbXBhaWduIjoiY29yZSIsIm5hbWUiOiIiLCJzdGF0dXNJZHMiOltdLCJvdXRjb21lSWRzIjpbXSwiZm9sbG93ZXJJZHMiOltdLCJ1bmZvbGRpbmdJZHMiOltdLCJiYWNrZ3JvdW5kQW5kVHJhaXRJZHMiOltdLCJsZWdhY3lUcmFpbCI6eyJwZXJzZXZlcmFuY2UiOjAsInRyYWdlZHkiOjAsImRvb20iOjAsImhlcm9pc20iOjB9LCJpc1NlcXVlbnRpYWxBZHZlbnR1cmUiOmZhbHNlLCJzZXF1ZW50aWFsQWR2ZW50dXJlUnVuZXMiOjB9LCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImRyZWFtcGllcmNlci1ib3ciLCJvZmZIYW5kSWQiOiIiLCJhcm1vcklkIjoiY2xvdGgtYXJtb3IiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOlsiZHVuZ2Vvbi1yb2xlLTEiXSwiZHVuZ2VvblJvbGVTa2lsbEN1YmVDb2xvcnMiOnsicmFua09uZSI6IlllbGxvdyIsInJhbmtUd28iOm51bGx9LCJzZXF1ZW50aWFsQWR2ZW50dXJlU3RhdGUiOm51bGwsImF1cmFJZCI6bnVsbCwib3V0Y29tZUlkcyI6W10sInN0YXR1c0lkcyI6W119XX0="
      );
    });
});
