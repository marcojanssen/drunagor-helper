describe("import campaign", () => {
  beforeEach(() => {
    cy.visit("./campaign");
  }),
    it("can import campaign", () => {
      cy.get("#campaign-import").click();
      cy.get("#campaign-import-modal #campaign-token").type(
        "eyJjYW1wYWlnbkRhdGEiOnsiY2FtcGFpZ25JZCI6IiIsImNhbXBhaWduIjoiY29yZSIsIm5hbWUiOiIiLCJzdGF0dXNJZHMiOltdLCJvdXRjb21lSWRzIjpbXSwiZm9sbG93ZXJJZHMiOltdLCJ1bmZvbGRpbmdJZHMiOltdLCJiYWNrZ3JvdW5kQW5kVHJhaXRJZHMiOltdLCJsZWdhY3lUcmFpbCI6eyJwZXJzZXZlcmFuY2UiOjAsInRyYWdlZHkiOjAsImRvb20iOjAsImhlcm9pc20iOjB9LCJpc1NlcXVlbnRpYWxBZHZlbnR1cmUiOnRydWUsInNlcXVlbnRpYWxBZHZlbnR1cmVSdW5lcyI6MjV9LCJoZXJvZXMiOlt7Imhlcm9JZCI6ImFya2hhbm9zIiwiY2FtcGFpZ25JZCI6IiIsImVxdWlwbWVudCI6eyJ3ZWFwb25JZCI6ImRyZWFtcGllcmNlci1ib3ciLCJvZmZIYW5kSWQiOiIiLCJhcm1vcklkIjoiY2xvdGgtYXJtb3IiLCJ0cmlua2V0SWQiOiIiLCJiYWdPbmVJZCI6IiIsImJhZ1R3b0lkIjoiIn0sInN0YXNoZWRDYXJkSWRzIjpbXSwic2tpbGxJZHMiOlsiZHVuZ2Vvbi1yb2xlLTEiXSwic2VxdWVudGlhbEFkdmVudHVyZVN0YXRlIjp7ImN1cnNlQ3ViZXMiOjIsInRyYXVtYUN1YmVzIjowLCJyZXNvdXJjZXMiOnsiRm9jdXMiOjIsIkZydWl0IG9mIExpZmUiOjAsIktJIjowLCJTaGllbGQiOjB9fSwiYXVyYUlkIjpudWxsLCJvdXRjb21lSWRzIjpbXSwic3RhdHVzSWRzIjpbXX1dfQ=="
      );
      cy.get("#campaign-import-modal #import-button").click();

      cy.get("#heroes").contains("Arkhanos");

      cy.get("#runes").should("have.value", "25");
      cy.get("#curse-cubes span").first().should("have.text", "2");
      cy.get("#trauma-cubes span").first().should("have.text", "0");
      cy.get("#resources").should("have.text", "2 Focus");

      cy.get(".hero-detail-btn").click();
      cy.get(".hero-weapon-wrapper .hero-item").should("have.value", "Dreampiercer Bow");
      cy.get(".hero-armor-wrapper .hero-item").should("have.value", "Cloth Armor");
    });
});
