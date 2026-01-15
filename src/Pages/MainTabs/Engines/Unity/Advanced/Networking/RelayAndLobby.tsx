import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RelayAndLobby = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Networking/RelayAndLobby';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Relay & Lobby" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RelayAndLobby;
