import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
