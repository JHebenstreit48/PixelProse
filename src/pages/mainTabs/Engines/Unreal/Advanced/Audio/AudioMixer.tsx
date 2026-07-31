import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
