import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
