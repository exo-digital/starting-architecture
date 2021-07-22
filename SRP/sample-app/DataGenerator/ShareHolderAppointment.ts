import { IDocumnetData } from "./IFileData";
import { Person } from "./Person";
import { CompanyChange } from "./CompanyChange";

export class ShareHolderAppointment extends CompanyChange {
  getFileName(): string {
    return "ShareHolderAppointment";
  }
  getDocumentData(): IDocumnetData {
    return {
      title: "Appointing new shareholder",
      body: `Hey people we have decided to have a new shareholder: ${this.newShareHolder?.name} as our new officer!!! it is what it is`,
    };
  }
  constructor(newShareHolder: Person | null) {
    super();
    this.newShareHolder = newShareHolder;
  }
  newShareHolder: Person | null;
}
