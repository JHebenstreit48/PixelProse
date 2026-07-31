import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
