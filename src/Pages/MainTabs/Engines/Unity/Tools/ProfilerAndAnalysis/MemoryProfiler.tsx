import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const MemoryProfiler = () => {
  const markdownFilePath = 'Engines/Unity/Tools/ProfilerAndAnalysis/MemoryProfiler';

  return (
    <>
      <PageLayout>
        <PageTitle title="Memory Profiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryProfiler;
