import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
