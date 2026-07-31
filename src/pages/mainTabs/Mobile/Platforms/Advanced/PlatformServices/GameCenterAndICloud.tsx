import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
