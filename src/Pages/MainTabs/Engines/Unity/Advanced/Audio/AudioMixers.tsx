import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
