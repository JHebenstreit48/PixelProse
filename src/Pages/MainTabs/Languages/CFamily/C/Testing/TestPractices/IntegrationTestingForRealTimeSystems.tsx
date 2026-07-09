import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IntegrationTestingForRealTimeSystems = () => {
  const markdownFilePath = 'Languages/CFamily/C/Testing/TestPractices/IntegrationTestingForRealTimeSystems';

  return (
    <>
      <PageLayout>
        <PageTitle title="Integration Testing for Real-Time Systems" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IntegrationTestingForRealTimeSystems;
