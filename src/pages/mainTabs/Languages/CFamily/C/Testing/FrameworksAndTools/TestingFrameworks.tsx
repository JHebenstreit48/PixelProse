import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
