import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RelayAndLobby = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Networking/RelayAndLobby';

  return (
    <>
      <PageLayout>
        <PageTitle title="Relay & Lobby" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RelayAndLobby;
