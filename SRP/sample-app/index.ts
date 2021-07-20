import {
  CompanyChange,
  CompanyChangeType,
  DocumentGenerator,
} from "./documentGenerator";

const companyChanges: CompanyChange[] = [
  new CompanyChange(
    CompanyChangeType.OfficerAppointment,
    { name: "Jack" },
    null,
    null,
    null
  ),
  new CompanyChange(
    CompanyChangeType.CompanyNameChange,
    null,
    null,
    "new Corp",
    "old Corp"
  ),
];
const documentGenerator = new DocumentGenerator();
companyChanges.forEach((change) => {
  documentGenerator.generateDocument(change);
});
