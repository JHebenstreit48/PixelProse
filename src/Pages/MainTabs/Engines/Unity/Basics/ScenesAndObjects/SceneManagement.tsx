import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SceneManagement = () => {
  const markdownFilePath = 'Engines/Unity/Basics/ScenesAndObjects/SceneManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Scene Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SceneManagement;
