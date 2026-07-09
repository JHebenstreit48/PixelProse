import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpatialAudio = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Audio/SpatialAudio';

  return (
    <>
      <PageLayout>
        <PageTitle title="Spatial Audio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpatialAudio;
