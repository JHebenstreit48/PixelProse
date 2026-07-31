import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
