import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
