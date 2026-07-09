import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const MaterialsAndShaders = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Rendering/MaterialsAndShaders';

  return (
    <>
      <PageLayout>
        <PageTitle title="Materials & Shaders" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default MaterialsAndShaders;
