import PageLayout from "@/components/navigationUI/pageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/notes/notes";

const ControlFlow = () => {
  const markdownFilePath =
    "LanguagesPages/CFamily/CNotes/Basics/CControlFlow.md";

  return (
    <>
      <PageLayout>
        <PageTitle title="C Program Flow - Control Flow" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default ControlFlow;