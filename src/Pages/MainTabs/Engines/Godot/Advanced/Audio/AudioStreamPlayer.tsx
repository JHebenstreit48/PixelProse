import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
