import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
