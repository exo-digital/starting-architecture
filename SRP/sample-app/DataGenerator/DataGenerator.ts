import { IDocumnetData } from "./IFileData";
import { CompanyChangeType } from "./CompanyChangeType";
import { CompanyChange } from "./CompanyChange";
import { IDataGenerator } from "./IDataGenerator";

export class DataGenerator implements IDataGenerator {
  getFileData(change: CompanyChange): IDocumnetData {
    return change.getDocumentData();
  }
}
