import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TestSuites = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Automation/TestSuites';

  return (
    <>
      <PageLayout>
        <PageTitle title="Test Suites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestSuites;
