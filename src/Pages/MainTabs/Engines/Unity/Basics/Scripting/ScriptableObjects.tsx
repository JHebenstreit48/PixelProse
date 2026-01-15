import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ScriptableObjects = () => {
  const markdownFilePath = 'Engines/Unity/Basics/Scripting/ScriptableObjects';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="ScriptableObjects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScriptableObjects;
