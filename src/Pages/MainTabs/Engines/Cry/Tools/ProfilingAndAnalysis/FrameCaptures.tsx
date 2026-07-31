import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const FrameCaptures = () => {
  const markdownFilePath = 'Engines/Cry/Tools/ProfilingAndAnalysis/FrameCaptures';

  return (
    <>
      <PageLayout>
        <PageTitle title="Frame Captures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrameCaptures;
