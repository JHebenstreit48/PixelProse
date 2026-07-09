import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PawnsAndControllers = () => {
  const markdownFilePath = 'Engines/Unreal/Basics/GameplayFramework/PawnsAndControllers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pawns & Controllers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PawnsAndControllers;
