import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameCenterAndICloud = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/PlatformServices/GameCenterAndICloud';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Game Center & iCloud" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameCenterAndICloud;
