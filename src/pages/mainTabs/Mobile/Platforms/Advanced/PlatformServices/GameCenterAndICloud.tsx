import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
