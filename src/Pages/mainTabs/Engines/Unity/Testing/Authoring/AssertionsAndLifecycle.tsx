import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
