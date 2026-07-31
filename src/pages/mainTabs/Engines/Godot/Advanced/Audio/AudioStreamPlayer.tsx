import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AudioStreamPlayer = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Audio/AudioStreamPlayer';

  return (
    <>
      <PageLayout>
        <PageTitle title="AudioStreamPlayer" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AudioStreamPlayer;
