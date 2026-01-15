import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SceneSetupAndTeardown = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Authoring/SceneSetupAndTeardown';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Scene Setup & Teardown" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SceneSetupAndTeardown;
