import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
