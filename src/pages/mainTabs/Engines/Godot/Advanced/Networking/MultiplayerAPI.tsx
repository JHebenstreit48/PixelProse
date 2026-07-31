import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
