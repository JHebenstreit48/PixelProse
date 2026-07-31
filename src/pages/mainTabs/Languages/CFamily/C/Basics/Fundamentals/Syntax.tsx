import PageLayout from "@/components/navigationUI/pageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/notes/notes";

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