import PageLayout from "@/Components/NavigationUI/PageLayout";
import PageTitle from "@/Components/PageComponents/PageTitle";
import Notes from "@/Components/PageComponents/Notes/Notes";

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