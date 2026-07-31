import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AudioMixers = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Audio/AudioMixers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Audio Mixers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioMixers;
