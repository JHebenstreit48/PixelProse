import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryViewsAndTypes = () => {
  const markdownFilePath = 'Languages/TypeScript/Advanced/WASMAndMemory/MemoryViewsAndTypes';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memory Views & Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryViewsAndTypes;
