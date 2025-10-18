import PageLayout from "@/Components/NavigationUI/PageLayout";
import Header from "@/Components/Shared/Header/Header";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

const CIntro = () => {
  const markdownFilePath =
    "/LanguagesPages/CFamilyNotes/CNotes/Basics/Fundamentals/Introduction";

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="C Introduction" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default CIntro;