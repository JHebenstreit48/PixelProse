import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MemoryProfiler = () => {
  const markdownFilePath = 'Engines/Unity/Tools/ProfilerAndAnalysis/MemoryProfiler';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Memory Profiler" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MemoryProfiler;
