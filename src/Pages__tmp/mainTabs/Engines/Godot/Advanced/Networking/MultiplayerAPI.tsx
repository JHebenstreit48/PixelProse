import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MultiplayerAPI = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Networking/MultiplayerAPI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Multiplayer API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiplayerAPI;
