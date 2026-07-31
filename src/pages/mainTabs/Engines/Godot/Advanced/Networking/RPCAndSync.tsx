import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const RPCAndSync = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Networking/RPCAndSync';

  return (
    <>
      <PageLayout>
        <PageTitle title="RPC & Sync" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RPCAndSync;
