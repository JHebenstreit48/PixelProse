import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AudioMixers = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/Audio/AudioMixers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Audio Mixers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioMixers;
