import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameDriver = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Testing/AutomationAndTools/GameDriver';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GameDriver" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameDriver;
