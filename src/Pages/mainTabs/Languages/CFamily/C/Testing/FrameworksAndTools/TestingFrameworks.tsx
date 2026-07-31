import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const TestingFrameworks = () => {
  const markdownFilePath = 'Languages/CFamily/C/Testing/FrameworksAndTools/TestingFrameworks';

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
