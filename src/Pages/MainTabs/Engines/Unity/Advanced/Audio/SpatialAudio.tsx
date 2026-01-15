import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const SpatialAudio = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Audio/SpatialAudio';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Spatial Audio" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SpatialAudio;
