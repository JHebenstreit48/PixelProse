import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GameCenterAndICloud = () => {
  const markdownFilePath = 'Mobile/Platforms/Advanced/PlatformServices/GameCenterAndICloud';

  return (
    <>
      <PageLayout>
        <PageTitle title="Game Center & iCloud" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GameCenterAndICloud;
