import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestingFrameworks = () => {
  const markdownFilePath = 'Languages/CFamily/C/Testing/FrameworksAndTools/TestingFrameworks';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Testing Frameworks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestingFrameworks;
