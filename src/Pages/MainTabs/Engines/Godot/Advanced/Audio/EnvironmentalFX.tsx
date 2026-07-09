import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const EnvironmentalFX = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Audio/EnvironmentalFX';

  return (
    <>
      <PageLayout>
        <PageTitle title="Environmental FX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default EnvironmentalFX;
