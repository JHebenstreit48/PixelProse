import PageLayout from "@/components/navigationUI/pageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/notes/notes";

const Introduction = () => {
  const markdownFilePath =
    "Languages/CFamily/C/Basics/Fundamentals/Introduction";

  return (
    <>
      <PageLayout>
        <PageTitle title="C Fundamentals - Introduction" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default Introduction;