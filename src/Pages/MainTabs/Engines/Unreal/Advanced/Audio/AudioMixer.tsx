import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AudioMixer = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Audio/AudioMixer';

  return (
    <>
      <PageLayout>
        <PageTitle title="Audio Mixer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioMixer;
