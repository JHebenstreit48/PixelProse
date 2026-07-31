import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
