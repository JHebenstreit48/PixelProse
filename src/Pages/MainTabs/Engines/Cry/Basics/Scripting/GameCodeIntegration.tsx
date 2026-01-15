import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameCodeIntegration = () => {
  const markdownFilePath = 'Engines/Cry/Basics/Scripting/GameCodeIntegration';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Game Code Integration" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameCodeIntegration;
