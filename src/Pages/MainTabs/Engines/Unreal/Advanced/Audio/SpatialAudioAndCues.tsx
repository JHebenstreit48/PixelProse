import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpatialAudioAndCues = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Audio/SpatialAudioAndCues';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Spatial Audio & Cues" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpatialAudioAndCues;
