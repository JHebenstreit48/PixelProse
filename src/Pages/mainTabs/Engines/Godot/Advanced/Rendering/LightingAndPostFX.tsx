import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const LightingAndPostFX = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Rendering/LightingAndPostFX';

  return (
    <>
      <PageLayout>
        <PageTitle title="Lighting & PostFX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LightingAndPostFX;
