import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AssertionsAndLifecycle = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Authoring/AssertionsAndLifecycle';

  return (
    <>
      <PageLayout>
        <PageTitle title="Assertions & Lifecycle" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssertionsAndLifecycle;
