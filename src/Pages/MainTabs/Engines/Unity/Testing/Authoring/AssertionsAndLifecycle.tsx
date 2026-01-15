import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AssertionsAndLifecycle = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Authoring/AssertionsAndLifecycle';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Assertions & Lifecycle" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AssertionsAndLifecycle;
