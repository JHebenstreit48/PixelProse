import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
