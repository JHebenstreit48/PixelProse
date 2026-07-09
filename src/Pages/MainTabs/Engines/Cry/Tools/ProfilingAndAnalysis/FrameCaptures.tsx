import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
