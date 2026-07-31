import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
