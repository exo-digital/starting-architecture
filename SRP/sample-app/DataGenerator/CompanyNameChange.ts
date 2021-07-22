import { IDocumnetData } from "./IFileData";
import { CompanyChange } from "./CompanyChange";

export class CompanyNameChange extends CompanyChange {
  getDocumentData(): IDocumnetData {
    return {
      title: "Company Name Change",
      body: `Hey people we have decided to change the name of company from ${this.prevCompanyName} to ${this.newCompanyName}!!! it is what it is`,
    };
  }
  constructor(newCompanyName: string | null, prevCompanyName: string | null) {
    super();
    this.newCompanyName = newCompanyName;
    this.prevCompanyName = prevCompanyName;
  }
  newCompanyName: string | null;
  prevCompanyName: string | null;
}
