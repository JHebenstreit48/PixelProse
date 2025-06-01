import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header";
import Notes from "@/Components/PageComponents/Notes/NotesRender";

const CControlFlow = () => {
  const markdownFilePath =
    "LanguagesPages/CFamily/CNotes/Basics/CControlFlow.md";

  return (
    <>
      <PageLayout>
        <Header text="C Control Flow" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default CControlFlow;
