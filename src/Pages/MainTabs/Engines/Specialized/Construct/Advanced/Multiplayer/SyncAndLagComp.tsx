import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SyncAndLagComp = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/Multiplayer/SyncAndLagComp';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Sync & Lag Comp" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyncAndLagComp;
