import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
