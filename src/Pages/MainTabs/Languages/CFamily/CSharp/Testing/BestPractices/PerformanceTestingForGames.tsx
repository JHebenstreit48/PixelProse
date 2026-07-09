import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PerformanceTestingForGames = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/BestPractices/PerformanceTestingForGames';

  return (
    <>
      <PageLayout>
        <PageTitle title="Performance Testing for Games" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PerformanceTestingForGames;
