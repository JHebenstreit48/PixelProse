import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
