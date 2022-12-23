import type { Chapter } from "@/data/store/Chapter";
import { TrackerStore } from "@/store/TrackerStore";

export class ChapterOne implements Chapter {
  id = "chapter 1";
  name = "Chapter 1";
  trackerStore = TrackerStore();

  public setup() {
    this.trackerStore.reset();
  }
}
