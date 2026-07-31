import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
