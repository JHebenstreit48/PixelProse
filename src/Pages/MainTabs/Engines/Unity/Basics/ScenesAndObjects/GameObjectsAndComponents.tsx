import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const GameObjectsAndComponents = () => {
  const markdownFilePath = 'Engines/Unity/Basics/ScenesAndObjects/GameObjectsAndComponents';

  return (
    <>
      <PageLayout>
        <PageTitle title="GameObjects & Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameObjectsAndComponents;
