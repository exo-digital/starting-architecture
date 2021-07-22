import { IDocumnetData } from "./IFileData";
import { CompanyChange } from "./CompanyChange";

export interface IDataGenerator {
  getFileData(change: CompanyChange): IDocumnetData;
}
