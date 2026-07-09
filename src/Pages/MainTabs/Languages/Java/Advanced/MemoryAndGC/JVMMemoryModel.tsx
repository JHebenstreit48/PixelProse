import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const JVMMemoryModel = () => {
  const markdownFilePath = 'Languages/Java/Advanced/MemoryAndGC/JVMMemoryModel';

  return (
    <>
      <PageLayout>
        <PageTitle title="JVM Memory Model" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default JVMMemoryModel;
