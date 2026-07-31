import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const GarbageCollection = () => {
  const markdownFilePath = 'Languages/Lua/Advanced/MemoryAndGC/GarbageCollection';

  return (
    <>
      <PageLayout>
        <PageTitle title="Garbage Collection" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GarbageCollection;
