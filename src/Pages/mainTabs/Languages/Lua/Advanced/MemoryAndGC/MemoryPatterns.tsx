import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
