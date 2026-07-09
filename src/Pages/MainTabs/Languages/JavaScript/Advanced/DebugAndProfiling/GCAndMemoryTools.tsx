import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GCAndMemoryTools = () => {
  const markdownFilePath = 'Languages/JavaScript/Advanced/DebugAndProfiling/GCAndMemoryTools';

  return (
    <>
      <PageLayout>
        <PageTitle title="GC & Memory Tools" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GCAndMemoryTools;
