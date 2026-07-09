import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
