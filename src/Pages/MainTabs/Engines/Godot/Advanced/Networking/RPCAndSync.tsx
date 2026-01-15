import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RPCAndSync = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Networking/RPCAndSync';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RPC & Sync" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RPCAndSync;
