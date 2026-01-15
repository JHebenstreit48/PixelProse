import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryPatterns = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/MemoryAndGC/MemoryPatterns';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memory Patterns" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryPatterns;
