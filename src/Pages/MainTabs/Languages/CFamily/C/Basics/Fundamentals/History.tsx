import PageLayout from "@/components/navigationUI/PageLayout";
import PageTitle from "@/components/pageComponents/pageTitle";
import Notes from "@/components/pageComponents/Notes/Notes";

const History = () => {
  const markdownFilePath = "Languages/CFamily/C/Basics/Fundamentals/History";

  return (
    <>
      <PageLayout>
        <PageTitle title="C Fundamentals - History" />
        <Notes filePath={markdownFilePath} markdownContent="markdownContent" />
      </PageLayout>
    </>
  );
};

export default History;