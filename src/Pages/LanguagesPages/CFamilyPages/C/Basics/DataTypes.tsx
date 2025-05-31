import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CDataTypes = () => {
  const markdownFilePath =
    "/LanguagesPages/CFamily/CNotes/Basics/CDataTypes.md";

  return (
    <>
      <PageLayout>
        <Header text="C Data Types" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default CDataTypes;
