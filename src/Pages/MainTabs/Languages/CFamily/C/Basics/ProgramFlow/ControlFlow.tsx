import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const ControlFlow = () => {
  const markdownFilePath =
    "LanguagesPages/CFamily/CNotes/Basics/CControlFlow.md";

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="C Program Flow - Control Flow" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default ControlFlow;