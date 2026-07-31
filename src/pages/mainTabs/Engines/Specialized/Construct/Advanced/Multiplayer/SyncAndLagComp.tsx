import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SyncAndLagComp = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/Multiplayer/SyncAndLagComp';

  return (
    <>
      <PageLayout>
        <PageTitle title="Sync & Lag Comp" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyncAndLagComp;
