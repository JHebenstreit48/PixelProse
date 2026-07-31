import PageLayout from "@/components/navigationUI/PageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/Notes/Notes";

const Syntax = () => {
  const markdownFilePath = "Languages/CFamily/C/Basics/Fundamentals/Syntax";

  return (
    <>
      <PageLayout>
        <PageTitle title="C Fundamentals - Syntax" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default Syntax;