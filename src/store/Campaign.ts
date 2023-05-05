export class Campaign {
  public campaignId: string;
  public campaign: "core" | "apocalypse" | "awakenings";
  public name: string = "";
  public statusIds: string[] = [];
  public outcomeIds: string[] = [];
  public followerIds: string[] = [];
  public unfoldingIds: string[] = [];

  constructor(campaignId: string, campaign: "core" | "apocalypse" | "awakenings") {
    this.campaignId = campaignId;
    this.campaign = campaign;
  }
}
