import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MemoryPatterns = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/MemoryAndGC/MemoryPatterns';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryPatterns;
