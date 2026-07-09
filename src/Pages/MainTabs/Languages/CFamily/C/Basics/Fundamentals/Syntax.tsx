import PageLayout from "@/Components/NavigationUI/PageLayout";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

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