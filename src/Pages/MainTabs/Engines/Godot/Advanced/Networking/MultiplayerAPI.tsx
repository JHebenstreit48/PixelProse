import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MultiplayerAPI = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Networking/MultiplayerAPI';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Multiplayer API" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MultiplayerAPI;
