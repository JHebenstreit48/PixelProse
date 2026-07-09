import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const TestingFrameworks = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Testing/FrameworksAndTools/TestingFrameworks';

  return (
    <>
      <PageLayout>
        <PageTitle title="Testing Frameworks" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default TestingFrameworks;
