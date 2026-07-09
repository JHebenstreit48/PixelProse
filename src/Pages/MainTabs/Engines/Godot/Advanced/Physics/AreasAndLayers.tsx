import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const AreasAndLayers = () => {
  const markdownFilePath = 'Engines/Godot/Advanced/Physics/AreasAndLayers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Areas & Layers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AreasAndLayers;
