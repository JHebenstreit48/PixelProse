import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
