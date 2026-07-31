import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
