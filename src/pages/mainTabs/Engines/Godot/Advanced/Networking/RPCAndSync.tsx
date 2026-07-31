import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
