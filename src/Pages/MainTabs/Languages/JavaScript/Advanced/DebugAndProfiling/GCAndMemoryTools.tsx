import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GCAndMemoryTools = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/DebugAndProfiling/GCAndMemoryTools';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="GC & Memory Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GCAndMemoryTools;
