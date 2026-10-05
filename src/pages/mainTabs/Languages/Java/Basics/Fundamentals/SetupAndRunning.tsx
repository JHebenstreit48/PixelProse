import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SetupAndRunning = () => {
  const markdownFilePath = 'Languages/Java/Basics/Fundamentals/SetupAndRunning';

  return (
    <>
      <PageLayout>
        <PageTitle title="Syntax & Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SetupAndRunning;