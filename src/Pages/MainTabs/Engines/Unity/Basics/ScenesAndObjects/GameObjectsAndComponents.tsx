import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameObjectsAndComponents = () => {
  const markdownFilePath = 'Engines/Unity/Basics/ScenesAndObjects/GameObjectsAndComponents';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GameObjects & Components" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameObjectsAndComponents;
