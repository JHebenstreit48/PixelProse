import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestSuites = () => {
  const markdownFilePath = 'Languages/Lua/Testing/Automation/TestSuites';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Test Suites" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestSuites;
