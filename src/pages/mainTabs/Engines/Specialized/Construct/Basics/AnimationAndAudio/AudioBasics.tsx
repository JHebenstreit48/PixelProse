import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
