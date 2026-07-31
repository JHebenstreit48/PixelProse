import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MemoryViewsAndTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/WASMAndMemory/MemoryViewsAndTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Views & Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryViewsAndTypes;
