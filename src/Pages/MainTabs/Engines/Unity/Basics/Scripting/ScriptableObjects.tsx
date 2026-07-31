import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ScriptableObjects = () => {
  const markdownFilePath = 'Engines/Unity/Basics/Scripting/ScriptableObjects';

  return (
    <>
      <PageLayout>
        <PageTitle title="ScriptableObjects" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ScriptableObjects;
