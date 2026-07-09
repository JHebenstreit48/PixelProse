import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const GPUCPUProfilers = () => {
  const markdownFilePath = 'Engines/Unreal/Tools/ProfilingAndAnalysis/GPUCPUProfilers';

  return (
    <>
      <PageLayout>
        <PageTitle title="GPU/CPU Profilers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default GPUCPUProfilers;
