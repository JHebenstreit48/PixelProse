import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const LightingAndPostFX = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Rendering/LightingAndPostFX';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Lighting & PostFX" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default LightingAndPostFX;
