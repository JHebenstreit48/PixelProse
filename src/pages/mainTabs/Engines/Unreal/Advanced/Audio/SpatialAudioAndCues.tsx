import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const SpatialAudioAndCues = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Audio/SpatialAudioAndCues';

  return (
    <>
      <PageLayout>
        <PageTitle title="Spatial Audio & Cues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpatialAudioAndCues;
