import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const History = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/Fundamentals/History';

  return (
    <PageLayout>
      <PageTitle title="C# - Basics - Fundamentals - History" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default History;