import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
