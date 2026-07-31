import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
