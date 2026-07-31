import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
