import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
