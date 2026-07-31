import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
