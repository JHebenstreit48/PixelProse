import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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