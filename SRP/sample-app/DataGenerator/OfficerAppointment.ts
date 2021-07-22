import { IDocumnetData } from "./IFileData";
import { Person } from "./Person";
import { CompanyChange } from "./CompanyChange";

export class OfficerAppointment extends CompanyChange {
  getFileName(): string {
    throw new Error("Method not implemented.");
  }
  getDocumentData(): IDocumnetData {
    return {
      title: "Appointing new officer",
      body: `Hey people we have decided to hire ${this.newOfficer?.name} as our new officer!!! it is what it is`,
    };
  }
  constructor(newOfficer: Person | null) {
    super();
    this.newOfficer = newOfficer;
  }
  newOfficer: Person | null;
}
