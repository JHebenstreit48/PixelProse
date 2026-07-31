import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GameCodeIntegration = () => {
  const markdownFilePath = 'Engines/Cry/Basics/Scripting/GameCodeIntegration';

  return (
    <>
      <PageLayout>
        <PageTitle title="Game Code Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameCodeIntegration;
