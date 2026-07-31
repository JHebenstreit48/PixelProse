import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SceneSetupAndTeardown = () => {
  const markdownFilePath = 'Engines/Unity/Testing/Authoring/SceneSetupAndTeardown';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scene Setup & Teardown" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SceneSetupAndTeardown;
