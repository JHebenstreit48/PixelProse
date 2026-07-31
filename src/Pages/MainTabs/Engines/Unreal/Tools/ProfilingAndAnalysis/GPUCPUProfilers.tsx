import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
