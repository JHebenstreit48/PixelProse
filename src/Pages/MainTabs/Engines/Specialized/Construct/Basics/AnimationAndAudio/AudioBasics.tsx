import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AudioBasics = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/AnimationAndAudio/AudioBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Audio Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioBasics;
