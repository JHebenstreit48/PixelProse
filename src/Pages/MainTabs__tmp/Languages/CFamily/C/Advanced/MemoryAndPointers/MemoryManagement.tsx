import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MemoryManagement = () => {
  const markdownFilePath = 'Languages/CFamily/C/Advanced/MemoryAndPointers/MemoryManagement';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Management" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryManagement;
