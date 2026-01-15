import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AudioMixer = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Audio/AudioMixer';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Audio Mixer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioMixer;
