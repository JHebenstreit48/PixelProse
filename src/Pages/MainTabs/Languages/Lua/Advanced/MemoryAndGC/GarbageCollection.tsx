import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GarbageCollection = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/MemoryAndGC/GarbageCollection';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Garbage Collection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GarbageCollection;
