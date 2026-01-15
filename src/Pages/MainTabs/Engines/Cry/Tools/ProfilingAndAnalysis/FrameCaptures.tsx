import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const FrameCaptures = () => {
  const markdownFilePath = 'Engines/Cry/Tools/ProfilingAndAnalysis/FrameCaptures';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Frame Captures" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default FrameCaptures;
