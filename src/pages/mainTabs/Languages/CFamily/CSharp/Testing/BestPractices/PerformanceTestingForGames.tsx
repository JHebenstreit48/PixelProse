import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
