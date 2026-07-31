import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
