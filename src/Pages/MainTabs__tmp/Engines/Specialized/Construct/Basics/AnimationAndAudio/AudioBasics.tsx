import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const AudioBasics = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Basics/AnimationAndAudio/AudioBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Audio Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioBasics;
